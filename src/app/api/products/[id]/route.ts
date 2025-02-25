import { NextRequest } from 'next/server';
import { getProductById, updateProduct, deleteProduct } from '@/server/controllers/productController';

interface Props {
  params: Promise<{
      id: string;
    }>;
}

export async function GET(_request: NextRequest, { params }: Props) {
  const { id } = await params;
  return getProductById(id);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  return updateProduct(request, id);
}

export async function DELETE(_request: NextRequest, { params }: Props) {
  const { id } = await params;
  return deleteProduct(id);
} 