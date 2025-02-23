import { NextRequest } from 'next/server';
import { getEventById, updateEvent, deleteEvent } from '@/server/controllers/eventController';

interface Props {
  params: {
    id: string;
  };
}

export async function GET(_request: NextRequest, { params }: Props) {
  return getEventById(params.id);
}

export async function PUT(request: NextRequest, { params }: Props) {
  return updateEvent(request, params.id);
}

export async function DELETE(_request: NextRequest, { params }: Props) {
  return deleteEvent(params.id);
} 