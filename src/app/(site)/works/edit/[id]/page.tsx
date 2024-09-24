// app/works/[id]/edit/page.tsx
"use client"

import { useState, useEffect } from 'react';
import { Artwork } from '@prisma/client';

export default function EditArtworkPage({ params }: { params: { id: string } }) {
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = params;

  // Fetch artwork data by ID
  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const res = await fetch(`/api/works/${id}`);
        const data = await res.json();
        setArtwork(data);
      } catch (error) {
        console.error('Failed to load artwork:', error);
      }
    };

    if (id) {
      fetchArtwork();
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`/api/works/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(artwork),
      });

      if (res.ok) {
        
      } else {
        console.error('Failed to update artwork');
      }
    } catch (error) {
      console.error('Error updating artwork:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if((name=="prevWork" || name=="nextWork" || name=="order")) {   
        setArtwork((prevArtwork) => (prevArtwork ? { ...prevArtwork, [name]: (value == "0" ? null : Number(value)) } : null));
        return;
    }
    setArtwork((prevArtwork) => (prevArtwork ? { ...prevArtwork, [name]: value } : null));
  };

  if (!artwork) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">작품 수정</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <label>
            제목
            <input
              type="text"
              name="title"
              value={artwork.title}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            작가명
            <input
              type="text"
              name="writer"
              value={artwork.writer}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            작가 소속
            <input
              type="text"
              name="writerDept"
              value={artwork.writerDept}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            작가 약력
            <textarea
              name="writerBio"
              value={artwork.writerBio}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            서체
            <input
              type="text"
              name="style"
              value={artwork.style}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            본문
            <textarea
              name="body"
              value={artwork.body}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            출전
            <input
              type="text"
              name="source"
              value={artwork.source}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            설명
            <textarea
              name="description"
              value={artwork.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            사진 URL
            <input
              type="text"
              name="imageUrl"
              value={artwork.imageUrl}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            분류 (student, alumni, support, instructor)
            <input
              type="text"
              name="category"
              value={artwork.category}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            작품 방향 (landscape, portrait)
            <input
              type="text"
              name="imageStyle"
              value={artwork.imageStyle}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            정렬 번호
            <input
              type="number"
              name="order"
              value={artwork.order}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            이전작품
            <input
              type="number"
              name="prevWork"
              value={artwork.prevWork??0}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label>
            다음작품
            <input
              type="number"
              name="nextWork"
              value={artwork.nextWork??0}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}