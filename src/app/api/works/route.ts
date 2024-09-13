// app/api/works/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '9', 10);
  const skip = (page - 1) * limit;

  const artworks = await prisma.artwork.findMany({
    skip,
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  const total = await prisma.artwork.count();

  return NextResponse.json({ artworks, total });
}