import prisma from "@/db";
import Lightbox from "@/app/components/lightbox";
import { notFound } from 'next/navigation';
import CaptionAnimation from "@/app/components/CaptionAnimation";
import Link from "next/link";

// 개별 작품을 가져오는 함수
async function getArtwork(id: string) {
  return await prisma.artwork.findUnique({
    where: { id: parseInt(id) },
  });
}

const LeftArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  );
  
  const RightArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );


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
          body={artwork.body}
          source={artwork.source}
          description={artwork.description}
        />
        {/* 이전 및 다음 작품 화살표 */}
      {artwork.prevWork && (
        <Link href={`/works/${artwork.prevWork}`} className="fixed left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-blue-500">
          <LeftArrowIcon />
        </Link>
      )}
      {artwork.nextWork && (
        <Link href={`/works/${artwork.nextWork}`} className="fixed right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-blue-500">
          <RightArrowIcon />
        </Link>
      )}

      </div>
    </section>
  );
}