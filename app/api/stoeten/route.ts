import { NextResponse } from 'next/server'

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
      next: { revalidate: 60 }, // Revalidate every 60 seconds
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
    // - field_7005440 -> "Rangschikking" (number) - note: likely capitalized
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
        
        const rangschikking = getField(
          row, 
          'Rangschikking',  // Most likely with capital R
          'rangschikking'
        )
        
        // Convert volgorde to number if it's a string
        let volgordeNum: number | null = null
        if (volgorde !== null) {
          if (typeof volgorde === 'number') {
            volgordeNum = volgorde
          } else if (typeof volgorde === 'string' && volgorde.trim() !== '') {
            const parsed = parseInt(volgorde, 10)
            if (!isNaN(parsed)) {
              volgordeNum = parsed
            }
          }
        }
        
        // Convert rangschikking to number if it's a string
        let rangschikkingNum: number | null = null
        if (rangschikking !== null) {
          if (typeof rangschikking === 'number') {
            rangschikkingNum = rangschikking
          } else if (typeof rangschikking === 'string' && rangschikking.trim() !== '') {
            const parsed = parseInt(rangschikking, 10)
            if (!isNaN(parsed)) {
              rangschikkingNum = parsed
            }
          }
        }
        
        return {
          id: row.id,
          volgorde: volgordeNum,
          naamVereniging: String(naamVereniging).trim(),
          thema: String(thema).trim(),
          rangschikking: rangschikkingNum,
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
