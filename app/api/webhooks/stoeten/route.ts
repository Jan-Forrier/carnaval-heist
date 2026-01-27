import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// Disable caching for this route
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    // Log the webhook request for debugging
    const eventType = request.headers.get('x-baserow-event')
    const deliveryId = request.headers.get('x-baserow-delivery')
    
    console.log('Webhook received:', {
      eventType,
      deliveryId,
      method: request.method,
      url: request.url,
    })

    // Optional: Verify webhook secret if you set one in Baserow
    const authHeader = request.headers.get('authorization')
    const webhookSecret = process.env.BASEROW_WEBHOOK_SECRET
    
    // If webhook secret is configured, verify it
    if (webhookSecret) {
      if (!authHeader || authHeader !== `Bearer ${webhookSecret}`) {
        console.warn('Webhook unauthorized - missing or invalid secret')
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        )
      }
    }

    // Parse the webhook payload (optional, for logging)
    try {
      const body = await request.json()
      console.log('Webhook payload:', JSON.stringify(body, null, 2))
    } catch (e) {
      // Body parsing failed, but that's okay - we don't need it for revalidation
      console.log('Could not parse webhook body (not required)')
    }

    // Revalidate the stoeten API route cache
    // This will force Next.js to fetch fresh data from Baserow on the next request
    revalidatePath('/api/stoeten')
    
    // Also revalidate the main page where Stoeten component is displayed
    revalidatePath('/')

    console.log('Cache invalidated successfully for event:', eventType)

    return NextResponse.json({ 
      success: true, 
      message: 'Stoeten cache invalidated successfully',
      eventType,
      deliveryId,
      timestamp: new Date().toISOString()
    }, { status: 200 })
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
    endpoint: '/api/webhooks/stoeten',
    status: 'active'
  }, { status: 200 })
}

// Support OPTIONS for CORS preflight (if needed)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Baserow-Event, X-Baserow-Delivery',
    },
  })
}
