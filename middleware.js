import { NextResponse } from 'next/server'

export function middleware(request) {
  const origin = request.headers.get('origin')

  // ✅ Handle preflight (IMPORTANT FIX)
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 200 })

    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    return response
  }

  const response = NextResponse.next()

  if (process.env.NODE_ENV === 'development') {
    response.headers.set('Access-Control-Allow-Origin', '*')
  } else if (origin === process.env.NEXT_PUBLIC_APP_URL) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

  return response
}
