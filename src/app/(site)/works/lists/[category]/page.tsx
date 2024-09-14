'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { Artwork } from '@prisma/client';
import LoadingSpinner from '@/app/components/LoadingSpinner';

export default function CategoryWorksPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // 카테고리에 따른 제목 설정
  const categoryTitle: { [key: string]: string } = {
    student: '재학생 작품',
    alumni: '졸업생 작품',
    support: '찬조 작품',
    instructor: '지도 강사 작품',
  };

  const load_len = 5

  // 작품 데이터를 가져오는 비동기 함수
  const fetchArtworks = useCallback(async () => {
    try {
      const res = await fetch(`/api/works/${category}?page=${page}&limit=${load_len}`);
      const data = await res.json();

      if (data.artworks.length > 0) {
        setArtworks((prev) => {
          const newArtworks = data.artworks.filter(
            (artwork: Artwork) => !prev.some((prevArtwork) => prevArtwork.id === artwork.id)
          );
          return [...prev, ...newArtworks];
        });
        setHasMore(data.artworks.length === load_len); // limit와 일치하는 경우 더 로드할 수 있음
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to fetch artworks:', error);
    }
  }, [category, page]);

  // 페이지가 변경될 때마다 작품을 가져오는 효과
  useEffect(() => {
    fetchArtworks();
  }, [fetchArtworks]);

  // Intersection Observer 설정
  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    const currentRef = observerRef.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore]);

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">{categoryTitle[category] || '작품 목록'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <Link href={`/works/${artwork.id}`} key={artwork.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative w-full h-64">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                  <p className="text-sm text-gray-600">{artwork.writer}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* 감지 요소 */}
        <div ref={observerRef} className="h-10 mt-4 flex justify-center items-center">
          {hasMore ? <LoadingSpinner></LoadingSpinner> : <p></p>}
        </div>
      </div>
    </section>
  );
}