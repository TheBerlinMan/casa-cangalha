import { NextResponse } from 'next/server';
import { Event } from '@/server/models/Event';
import connectDB from '@/server/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    const events = await Event.find().sort({ startDate: 'asc' });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const event = await Event.create(data);
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
} 