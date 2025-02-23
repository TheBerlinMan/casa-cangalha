import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Event from '../models/Event';
import connectDB from '../lib/mongodb';

export async function getAllEvents() {
  try {
    await connectDB();
    const events = await Event.find().sort({ startDate: 'asc' });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

export async function getEventById(id: string) {
  try {
    await connectDB();
    const event = await Event.findById(id);
    
    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
}

export async function createEvent(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();
    
    const event = await Event.create(data);
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}

export async function updateEvent(request: NextRequest, id: string) {
  try {
    await connectDB();
    const data = await request.json();
    
    const event = await Event.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );
    
    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
}

export async function deleteEvent(id: string) {
  try {
    await connectDB();
    const event = await Event.findByIdAndDelete(id);
    
    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Event deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    );
  }
} 