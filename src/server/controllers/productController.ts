import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Product } from '../models/Product';
import connectDB from '../lib/mongodb';

export async function getAllProducts() {
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

export async function getProductById(id: string) {
  try {
    await connectDB();
    const product = await Product.findById(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}

export async function createProduct(request: NextRequest) {
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

export async function updateProduct(request: NextRequest, id: string) {
  try {
    await connectDB();
    const data = await request.json();
    
    const product = await Product.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}

export async function deleteProduct(id: string) {
  try {
    await connectDB();
    const product = await Product.findByIdAndDelete(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
} 