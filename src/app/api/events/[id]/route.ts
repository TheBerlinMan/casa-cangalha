import { NextRequest } from 'next/server';
import { getEventById, updateEvent, deleteEvent } from '@/server/controllers/eventController';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  return getEventById(params.id);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return updateEvent(request, params.id);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  return deleteEvent(params.id);
} 