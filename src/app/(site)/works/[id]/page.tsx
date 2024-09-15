import prisma from "@/db";
import Lightbox from "@/app/components/lightbox";
import { notFound } from 'next/navigation';
import CaptionAnimation from "@/app/components/CaptionAnimation";

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
      <div className={`max-w-6xl mx-auto p-2 lg:p-6 flex ${isLandscape ? 'flex-col' : 'flex-col lg:flex-row'} gap-8`}>
        <div className={`relative ${isLandscape ? 'w-full' : 'flex-1'}  overflow-hidden rounded-lg mb-6 max-w-full max-h-[80vh] mx-auto`}>
          <Lightbox imageUrl={artwork.imageUrl} altText={artwork.title} />
        </div>
        <CaptionAnimation
          title={artwork.title}
          style={artwork.style}
          writer={artwork.writer}
          writerDept={artwork.writerDept}
          writerBio={artwork.writerBio}
          description={artwork.description}
        />
      </div>
    </section>
  );
}