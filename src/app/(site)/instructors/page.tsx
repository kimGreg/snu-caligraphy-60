// app/(site)/instructors/page.tsx
'use client';

import Link from "next/link";

const instructors = [
  {
    name: ' 여초 김응현(如初 金膺顯)',
    title: '초대 지도강사',
    bio: '1964-1975',
    path: '/instructors/1',
    disabled: false,
  },
  {
    name: '심정 박주영(心丁 朴周榮)',
    title: '제2대 지도강사',
    bio: '1976-1982',
  },
  {
    name: '죽생 정범훈(竹生 鄭範熏)',
    title: '제3대 지도강사',
    bio: '1982-1999',
  },
  {
    name: '초민 박용설(艸民 朴龍卨)',
    title: '제4대 지도강사',
    bio: '1999-2002',
  },
  {
    name: '금정초 남기매(嶔正艸 南基梅)',
    title: '제5대 지도강사',
    bio: '2002-2014',
  },
];

export default function InstructorsPage() {
    return (
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl mb-8">역대 지도 강사</h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor, index) => (
              <Link href={instructor.path??"#"}  key={index}>
                <div
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                    <h2 className="text-xl font-bold text-snublue">{instructor.name}</h2>
                    <h3 className="text-sm font-semibold text-gray-500">{instructor.title}</h3>
                    <p className="mt-2 text-gray-600">{instructor.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }