import { NextResponse } from 'next/server';

export async function GET() {
  const timestamp = new Date().toISOString();

  return NextResponse.json({
    status: 'healthy',
    timestamp,
    service: 'fact-tory-frontend',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
