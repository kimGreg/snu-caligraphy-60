// app/(site)/works/page.tsx
import prisma from '@/db';
import Link from 'next/link';
import { Artwork } from '@prisma/client';
import ArtworkCard from '@/app/components/ArtworkCard';

async function getArtworks() {
    // SQL의 랜덤 정렬 기능을 활용하여 각 카테고리별로 3개의 작품을 랜덤하게 선택
    const studentWorks: Artwork[] = await prisma.$queryRaw<Artwork[]>`
      SELECT *
      FROM "public"."Artwork"
      WHERE category = 'student'
      ORDER BY RANDOM()
      LIMIT 3;
    `;
  
    const alumniWorks: Artwork[] = await prisma.$queryRaw<Artwork[]>`
      SELECT *
      FROM "public"."Artwork"
      WHERE category = 'alumni'
      ORDER BY RANDOM()
      LIMIT 3;
    `;
  
    const supportWorks: Artwork[] = await prisma.$queryRaw<Artwork[]>`
      SELECT *
      FROM "public"."Artwork"
      WHERE category = 'support'
      ORDER BY RANDOM()
      LIMIT 3;
    `;
  
    const instructorWorks: Artwork[] = await prisma.$queryRaw<Artwork[]>`
      SELECT *
      FROM "public"."Artwork"
      WHERE category = 'instructor'
      ORDER BY RANDOM()
      LIMIT 3;
    `;
  
    return { studentWorks, alumniWorks, supportWorks, instructorWorks };
  }
  

export default async function WorksPage() {
  const { studentWorks, alumniWorks, supportWorks, instructorWorks } = await getArtworks();

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">작품 목록</h2>

        {/* 재학생 작품 섹션 */}
        <h3 className="text-2xl font-semibold mb-4">재학생 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {studentWorks.map((artwork) => (
            <Link href={`/works/${artwork.id}`} key={artwork.id} className="group">
              <ArtworkCard imageUrl={artwork.imageUrl} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/student" className="text-snublue hover:underline">
          모두 보기
        </Link>

        {/* 졸업생 작품 섹션 */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">졸업생 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {alumniWorks.map((artwork) => (
            <Link href={`/works/${artwork.id}`} key={artwork.id} className="group">
              <ArtworkCard imageUrl={artwork.imageUrl} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/alumni" className="text-snublue hover:underline">
        모두 보기
        </Link>

        {/* 찬조 작품 섹션 */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">찬조 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {supportWorks.map((artwork) => (
            <Link href={`/works/${artwork.id}`} key={artwork.id} className="group">
              <ArtworkCard imageUrl={artwork.imageUrl} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/support" className="text-snublue hover:underline">
        모두 보기
        </Link>

        {/* 지도 강사 작품 섹션 */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">지도 강사 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {instructorWorks.map((artwork) => (
            <Link href={`/works/instructor`} key={artwork.id} className="group">
              <ArtworkCard imageUrl={artwork.imageUrl} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/instructor" className="text-snublue hover:underline">
        모두 보기
        </Link>
      </div>
    </section>
  );
}