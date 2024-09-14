import prisma from "@/db";
import Lightbox from "@/app/components/lightbox";
import { notFound } from 'next/navigation';

// 개별 작품을 가져오는 함수
async function getArtwork(id: string) {
  return await prisma.artwork.findUnique({
    where: { id: parseInt(id) },
  });
}


export default async function ArtworkDetailPage({ params }: { params: { id: string } }) {
  const artwork = await getArtwork(params.id);

  if (!artwork) {
    return notFound();
  }

  const isLandscape = artwork.imageStyle === 'landscape';

  return (
    <section className="py-10">
      <div className={`max-w-6xl mx-auto p-6 flex ${isLandscape ? 'flex-col' : 'flex-col lg:flex-row'} gap-8`}>
        <div className={`relative ${isLandscape ? 'w-full' : 'flex-1'}  overflow-hidden rounded-lg mb-6 max-w-full max-h-[80vh] mx-auto`}>
          <Lightbox imageUrl={artwork.imageUrl} altText={artwork.title} />
        </div>
       
        <div className={`flex-1 ${isLandscape ? 'mt-4' : 'mt-4 lg:mt-0'}`}>
          <h2 className="text-4xl mb-4">{artwork.title}</h2>
          <h3 className="text-2xl mb-4">{artwork.writer}</h3>
          <p className="text-lg" style={{ whiteSpace: "pre-wrap" }}>{artwork.description}</p>
        </div>
      </div>
    </section>
  );
}