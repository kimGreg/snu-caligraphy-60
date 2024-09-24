// app/api/works/[id]/route.ts

import prisma from '@/db';
import { NextResponse } from 'next/server';

// GET: 특정 작품 가져오기
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const artwork = await prisma.artwork.findUnique({
      where: { id: Number(id) },
    });
    if (!artwork) {
      return NextResponse.json({ message: 'Artwork not found' }, { status: 404 });
    }
    return NextResponse.json(artwork, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch artwork:', error);
    return NextResponse.json({ message: 'Failed to fetch artwork' }, { status: 500 });
  }
}

// PUT: 특정 작품 수정하기
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const body = await req.json();
    const updatedArtwork = await prisma.artwork.update({
      where: { id: Number(id) },
      data: body,
    });
    return NextResponse.json(updatedArtwork, { status: 200 });
  } catch (error) {
    console.error('Failed to update artwork:', error);
    return NextResponse.json({ message: 'Failed to update artwork' }, { status: 500 });
  }
}