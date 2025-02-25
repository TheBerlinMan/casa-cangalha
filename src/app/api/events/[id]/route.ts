import { NextResponse } from 'next/server';
import Event from '@/server/models/Event';
import connectDB from '@/server/lib/mongodb';

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  
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
      { error },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  
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
      { error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  
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
      { error },
      { status: 500 }
    );
  }
} 