import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  try {
    // Optional: Verify webhook secret if you set one in Baserow
    // For now, we'll accept any POST request, but you can add authentication later
    const authHeader = request.headers.get('authorization')
    const webhookSecret = process.env.BASEROW_WEBHOOK_SECRET
    
    // If webhook secret is configured, verify it
    if (webhookSecret) {
      if (!authHeader || authHeader !== `Bearer ${webhookSecret}`) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        )
      }
    }

    // Revalidate the stoeten API route cache
    // This will force Next.js to fetch fresh data from Baserow on the next request
    revalidatePath('/api/stoeten')
    
    // Also revalidate the main page where Stoeten component is displayed
    revalidatePath('/')

    return NextResponse.json({ 
      success: true, 
      message: 'Stoeten cache invalidated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process webhook', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}

// Also support GET for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Stoeten webhook endpoint is active. Use POST to trigger cache invalidation.',
    endpoint: '/api/webhooks/stoeten'
  })
}
