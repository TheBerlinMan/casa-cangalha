import { NextRequest } from 'next/server';
import { getBlogById, updateBlog, deleteBlog } from '@/server/controllers/blogController';

interface Props {
  params: Promise<{
      id: string;
    }>;
}

export async function GET(_request: NextRequest, { params }: Props) {
  const { id } = await params;
  return getBlogById(id);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  return updateBlog(request, id);
}

export async function DELETE(_request: NextRequest, { params }: Props) {
  const { id } = await params;
  return deleteBlog(id);
} 