import { NextRequest } from 'next/server';
import { getEventById, updateEvent, deleteEvent } from '@/server/controllers/eventController';

interface Props {
  params: Promise<{
      id: string;
    }>;
}

export async function GET(_request: NextRequest, { params }: Props) {
  const { id } = await params;
  return getEventById(id);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;

  return updateEvent(request, id);
}

export async function DELETE(_request: NextRequest, { params }: Props) {
  const { id } = await params;

  return deleteEvent(id);
} 