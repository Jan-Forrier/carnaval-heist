import { NextResponse } from 'next/server'

// Disable caching for this route to ensure fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const token = process.env.BASEROW_API_TOKEN
  
  if (!token) {
    return NextResponse.json(
      { error: 'BASEROW_API_TOKEN is not configured' },
      { status: 500 }
    )
  }

  const tableId = 816758
  const url = `https://api.baserow.io/api/database/rows/table/${tableId}/?user_field_names=true`

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data from Baserow
    })

    if (!response.ok) {
      throw new Error(`Baserow API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    // Transform the data to ensure we have the right fields
    // With user_field_names=true, Baserow returns fields with their friendly names
    // Field mappings:
    // - field_7005342 -> "Volgorde" (number) - note: likely capitalized
    // - field_7005343 -> "Naam vereniging" (string) - note: with space
    // - field_7005438 -> "Thema" (string) - note: likely capitalized
    // - field_7005440 -> "Rangschikking Zondag" (number) - note: likely capitalized
    // - field_7007073 -> "Rangschikking Dinsdag" (number) - note: likely capitalized
    const rows: any[] = data.results || []
    
    // Debug: log first row to see actual field names
    if (rows.length > 0) {
      console.log('Sample Baserow row keys:', Object.keys(rows[0]))
      console.log('Sample Baserow row:', JSON.stringify(rows[0], null, 2))
    }
    
    // Helper function to get field value with fallbacks
    const getField = (row: any, ...fieldNames: string[]) => {
      for (const name of fieldNames) {
        if (row[name] !== undefined && row[name] !== null && row[name] !== '') {
          return row[name]
        }
      }
      return null
    }
    
    // Filter and map to our expected structure
    const stoeten = rows
      .filter(row => {
        // Check multiple possible field name variations (with space, without space, different cases)
        const naam = getField(
          row, 
          'Naam vereniging', 
          'naam_vereniging', 
          'Naam vereniging',
          'naamVereniging',
          'NaamVereniging'
        )
        return naam && String(naam).trim() !== ''
      })
      .map(row => {
        // Try different possible field name variations
        // Baserow with user_field_names=true typically uses the exact field name as shown in UI
        const volgorde = getField(
          row, 
          'Volgorde',  // Most likely with capital V
          'volgorde',
          'volgnummer',
          'Volgnummer'
        )
        
        const naamVereniging = getField(
          row, 
          'Naam vereniging',  // Most likely with space and capital N
          'naam_vereniging',
          'Naam vereniging',
          'naamVereniging',
          'NaamVereniging'
        ) || ''
        
        const thema = getField(
          row, 
          'Thema',  // Most likely with capital T
          'thema'
        ) || ''
        
        const rangschikkingZondag = getField(
          row, 
          'Rangschikking Zondag',  // Most likely with capital R and space
          'Rangschikking zondag',
          'rangschikking_zondag',
          'rangschikkingZondag',
          'Rangschikking',  // Fallback to old field name
          'rangschikking'
        )
        
        const rangschikkingDinsdag = getField(
          row, 
          'Rangschikking Dinsdag',  // Most likely with capital R and space
          'Rangschikking dinsdag',
          'rangschikking_dinsdag',
          'rangschikkingDinsdag'
        )
        
        // Helper function to convert to number
        const toNumber = (value: any): number | null => {
          if (value === null || value === undefined || value === '') {
            return null
          }
          if (typeof value === 'number') {
            return value
          }
          if (typeof value === 'string' && value.trim() !== '') {
            const parsed = parseInt(value, 10)
            if (!isNaN(parsed)) {
              return parsed
            }
          }
          return null
        }
        
        // Convert volgorde to number if it's a string
        const volgordeNum = toNumber(volgorde)
        const rangschikkingZondagNum = toNumber(rangschikkingZondag)
        const rangschikkingDinsdagNum = toNumber(rangschikkingDinsdag)
        
        return {
          id: row.id,
          volgorde: volgordeNum,
          naamVereniging: String(naamVereniging).trim(),
          thema: String(thema).trim(),
          rangschikkingZondag: rangschikkingZondagNum,
          rangschikkingDinsdag: rangschikkingDinsdagNum,
        }
      })
      .filter(stoet => stoet.naamVereniging !== '') // Final filter to ensure we have a name
      .sort((a, b) => {
        // Sort by volgorde if available, otherwise by id
        if (a.volgorde !== null && b.volgorde !== null) {
          return a.volgorde - b.volgorde
        }
        if (a.volgorde !== null) return -1
        if (b.volgorde !== null) return 1
        return a.id - b.id
      })

    return NextResponse.json({ stoeten })
  } catch (error) {
    console.error('Error fetching Baserow data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stoeten data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
