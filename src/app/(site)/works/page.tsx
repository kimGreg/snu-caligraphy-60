"use client"

import Link from 'next/link';
import ArtworkCard from '@/app/components/ArtworkCard';
import pickRandom from 'pick-random';

import studentWorks_raw from "@/public/Artwork_student.json" 
import supportWorks_raw from "@/public/Artwork_support.json" 
import alumniWorks_raw from "@/public/Artwork_alumni.json" 
import instructorWorks_raw from "@/public/Artwork_instructor.json" 

type Artwork = {
    id: number;
    title: string;
    writer: string;
    writerDept: string;
    writerBio: string;
    style: string;
    body: string;
    source: string;
    description: string;
    category: string;
    imageStyle: string;
    order: number;
    prevWork: number | null;
    nextWork: number | null;
}

async function getArtworks() {
    // SQL의 랜덤 정렬 기능을 활용하여 각 카테고리별로 3개의 작품을 랜덤하게 선택
    const studentWorks: Artwork[] = pickRandom(studentWorks_raw, {count: 3})
    const alumniWorks: Artwork[] = pickRandom(alumniWorks_raw, {count: 3})
    const supportWorks: Artwork[] = pickRandom(supportWorks_raw, {count: 3})
    const instructorWorks: Artwork[] = pickRandom(instructorWorks_raw, {count: 3})
  
    return { studentWorks, alumniWorks, supportWorks, instructorWorks };
  }
  

export default async function WorksPage() {
  const { studentWorks, alumniWorks, supportWorks, instructorWorks } = await getArtworks();

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-4xl font-bold text-center mb-8">작품 목록</h2> */}

        <h3 className="text-2xl font-semibold mb-4">작품</h3>
        <div className="mb-4">
            <Link href={`/works/67`} key={1067} className="group">
              <ArtworkCard id={String(67)} title={"서울대학교서예회 창립육십주년기념전"} writer={"심정 박주영 (心丁 朴周榮)"} ></ArtworkCard>
            </Link>
        </div>
        <Link href="/works/whole" className="text-snublue hover:underline">
          작품 목록
        </Link>

        <h3 className="text-2xl font-semibold mt-8 mb-4">온라인 전시실</h3>
        <Link href="/works/online" className="text-snublue hover:underline">
          바로 가기
        </Link>


        {/* 재학생 작품 섹션 */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">재학생 작품</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {studentWorks.map((artwork) => (
            <Link href={`/works/${artwork.id}`} key={artwork.id} className="group">
              <ArtworkCard id={String(artwork.id)} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
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
              <ArtworkCard id={String(artwork.id)} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
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
              <ArtworkCard id={String(artwork.id)} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
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
            <Link href={`/works/${artwork.id}`} key={artwork.id} className="group">
              <ArtworkCard id={String(artwork.id)} title={artwork.title} writer={artwork.writer} ></ArtworkCard>
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