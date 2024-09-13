import prisma from "@/db";

import Image from "next/image";

// 개별 작품을 가져오는 함수
async function getArtwork(id: string) {
  return await prisma.artwork.findUnique({
    where: { id: parseInt(id) },
  });
}


export default async function ArtworkDetailPage({ params }: { params: { id: string } }) {
  const artwork = await getArtwork(params.id);

  if (!artwork) {
    return <p>작품을 찾을 수 없습니다.</p>;
  }

  const isLandscape = artwork.imageStyle === 'landscape';

  return (
    <section className="py-10">
      <div className={`max-w-6xl mx-auto p-6 flex ${isLandscape ? 'flex-col' : 'flex-col lg:flex-row'} gap-8`}>
        {/* 작품 이미지 */}
        <div className={`relative ${isLandscape ? 'w-full' : 'flex-1'}`}>
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            layout="responsive"
            width={800}
            height={600}
            className="object-contain"
            priority
          />
        </div>

        {/* 작가와 설명 */}
        <div className={`flex-1 ${isLandscape ? 'mt-4' : 'mt-4 lg:mt-0'}`}>
          <h2 className="text-4xl mb-4">{artwork.title}</h2>
          <h3 className="text-2xl mb-4">{artwork.writer}</h3>
          <p className="text-lg">{artwork.description}</p>
        </div>
      </div>
    </section>
  );
}