// app/(site)/instructors/page.tsx
'use client';

const instructors = [
  {
    name: ' 故 여초 김응현(如初 金膺顯)',
    title: '초대 지도강사',
    bio: '1964년부터 1975년까지 서예회의  지도강사로 활동.',
  },
  {
    name: '심정 박주영(心丁 朴周榮)',
    title: '제2대 지도강사',
    bio: '1976년부터 1982년까지 서예회의 지도강사로 활동.',
  },
  {
    name: '죽생 정범훈(竹生 鄭範勳)',
    title: '제3대 지도강사',
    bio: '1982년부터 1999년까지 서예회에서 지도강사로 활동.',
  },
  {
    name: '초민 박용설(艸民 朴龍卨)',
    title: '제4대 지도강사',
    bio: '1999년부터 2002년까지 서예회에서 지도강사로 활동.',
  },
  {
    name: '금정초 남기매(欽正艸 南基梅)',
    title: '제5대 지도강사',
    bio: '2002년부터 ????년까지 서예회에서 지도강사로 활동.',
  },
];

export default function InstructorsPage() {
    return (
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">역대 지도 강사</h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-snublue">{instructor.name}</h2>
                <h3 className="text-sm font-semibold text-gray-500">{instructor.title}</h3>
                <p className="mt-2 text-gray-600">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }