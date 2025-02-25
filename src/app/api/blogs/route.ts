import { NextResponse } from 'next/server';
import { Blog } from '@/server/models/Blog';
import connectDB from '@/server/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: 'desc' });
    return NextResponse.json(blogs);
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
    
    const blog = await Blog.create(data);
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
} 