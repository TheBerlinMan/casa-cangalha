import { NextRequest } from 'next/server';
import { getAllEvents, createEvent } from '@/server/controllers/eventController';

export async function GET() {
  return getAllEvents();
}

export async function POST(request: NextRequest) {
  return createEvent(request);
} 