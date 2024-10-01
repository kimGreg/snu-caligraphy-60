import prisma from '@/db';
import Link from 'next/link';
import ArtworkCard from '@/app/components/ArtworkCard';

export default async function CategoryWorksPage({ params }: { params: { category: string } }) {
  const { category } = params;

  const artworks = await prisma.artwork.findMany({
    where: { category },
    orderBy: { order: 'asc' },
    select: {
        title: true,
        writer: true,
        id: true,
    }
  });

   // 카테고리에 따른 제목 설정
   const categoryTitle: { [key: string]: string } = {
    student: '재학생 작품',
    alumni: '졸업생 작품',
    support: '찬조 작품',
    instructor: '지도 강사 작품',
    online: '온라인 전시 작품'
  };

  return <section className="bg-gray-50 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">{categoryTitle[category] || '작품 목록'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
            <Link href={`/works/${artwork.id}`} key={artwork.id} className="group">
            <ArtworkCard id={String(artwork.id)} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
            </Link>
        ))}
        </div>
    </div>
    </section>
}