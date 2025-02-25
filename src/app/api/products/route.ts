import { NextResponse } from 'next/server';
import { Product } from '@/server/models/Product';
import connectDB from '@/server/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: 'desc' });
    return NextResponse.json(products);
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
    
    const product = await Product.create(data);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
} 