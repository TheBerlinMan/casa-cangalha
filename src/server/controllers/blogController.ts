import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Blog } from '../models/Blog';
import connectDB from '../lib/mongodb';

export async function getAllBlogs() {
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

export async function getBlogById(id: string) {
  try {
    await connectDB();
    const blog = await Blog.findById(id);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}

export async function createBlog(request: NextRequest) {
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

export async function updateBlog(request: NextRequest, id: string) {
  try {
    await connectDB();
    const data = await request.json();
    
    const blog = await Blog.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}

export async function deleteBlog(id: string) {
  try {
    await connectDB();
    const blog = await Blog.findByIdAndDelete(id);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
} 