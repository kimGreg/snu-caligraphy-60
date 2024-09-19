// app/api/works/[category]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/db';

export async function GET(request: Request, { params }: { params: { category: string } }) {
  const { category } = params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '9', 10);
  const skip = (page - 1) * limit;

  const artworks = await prisma.artwork.findMany({
    where: { category },
    skip,
    take: limit,
    orderBy: { id: 'asc' },
  });

  const total = await prisma.artwork.count({
    where: { category },
  });

  return NextResponse.json({ artworks, total });
}