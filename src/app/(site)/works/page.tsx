// app/(site)/works/page.tsx
import prisma from '@/db';
import Link from 'next/link';

// 작품 목록을 가져오는 함수
async function getArtworks() {
  const artworks = await prisma.artwork.findMany();
  
  // 카테고리별로 작품을 분류하고, 3개의 작품을 랜덤하게 선택
  const getRandomItems = (items: Array<any>) => items.sort(() => 0.5 - Math.random()).slice(0, 3);

  const studentWorks = getRandomItems(artworks.filter((artwork) => artwork.category === 'student'));
  const alumniWorks = getRandomItems(artworks.filter((artwork) => artwork.category === 'alumni'));
  const supportWorks = getRandomItems(artworks.filter((artwork) => artwork.category === 'support'));
  const instructorWorks = getRandomItems(artworks.filter((artwork) => artwork.category === 'instructor'));

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
                  <p className="text-sm text-gray-600">{artwork.authorName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/student" className="text-blue-500 hover:underline">
          더 자세히 보기
        </Link>

        {/* 졸업생 작품 섹션 */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">졸업생 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {alumniWorks.map((artwork) => (
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
                  <p className="text-sm text-gray-600">{artwork.authorName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/alumni" className="text-blue-500 hover:underline">
          더 자세히 보기
        </Link>

        {/* 찬조 작품 섹션 */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">찬조 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {supportWorks.map((artwork) => (
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
                  <p className="text-sm text-gray-600">{artwork.authorName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/support" className="text-blue-500 hover:underline">
          더 자세히 보기
        </Link>

        {/* 지도 강사 작품 섹션 */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">지도 강사 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {instructorWorks.map((artwork) => (
            <Link href={`/works/instructor`} key={artwork.id} className="group">
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
                  <p className="text-sm text-gray-600">{artwork.authorName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/works/lists/instructor" className="text-blue-500 hover:underline">
          더 자세히 보기
        </Link>
      </div>
    </section>
  );
}