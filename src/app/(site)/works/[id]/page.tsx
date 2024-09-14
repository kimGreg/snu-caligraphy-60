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

        <div className="text-end px-10">
            <h2 className="text-3xl mb-3 font-bold">{artwork.title}</h2>
            <h4  className="text-lg text-gray-600 mb-3">{artwork.style} </h4>
            <h3 className="text-lg  mb-10">{artwork.writer} • {artwork.writerDept}</h3>
        </div>
        

        <p className="text-lg" style={{ whiteSpace: "pre-wrap" }}>{artwork.description}</p>
        </div>
      </div>
    </section>
  );
}