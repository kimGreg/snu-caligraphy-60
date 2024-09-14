// app/(site)/instructors/page.tsx
'use client';

const instructors = [
  {
    name: '여초 김응현',
    title: '초대 지도강사',
    bio: '1964년부터 1975년까지 서예회의 첫 번째 지도강사로 활동.',
  },
  {
    name: '심정 박주영',
    title: '제2대 지도강사',
    bio: '1976년부터 1982년까지 서예회의 두 번째 지도강사로 활동.',
  },
  {
    name: '죽생 정범훈',
    title: '제3대 지도강사',
    bio: '1982년부터 ????년까지 서예회에서 지도강사로 활동.',
  },
];

export default function InstructorsPage() {
    return (
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">역대 지도 강사</h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-blue-600">{instructor.name}</h2>
                <h3 className="text-sm font-semibold text-gray-500">{instructor.title}</h3>
                <p className="mt-2 text-gray-600">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }