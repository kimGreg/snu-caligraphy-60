// app/(site)/about/page.tsx
'use client';

export default function AboutPage() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">서예회 60주년 기념 소개</h1>

        {/* 역사와 전통 섹션 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">60년의 발자취</h2>
          <p className="text-gray-700 leading-relaxed">
            서예회는 1964년에 창립되어 전통 서예의 아름다움을 보존하고, 이를 현대에 맞게 재해석하는 데 기여해 왔습니다. 
            지난 60년 동안 서예회는 수많은 전시회와 대회를 통해 서예의 가치를 널리 알리고, 수많은 후학들을 양성하며 
            한국 서예의 발전을 이끌어 왔습니다. 서예회의 발자취는 곧 한국 서예의 역사이자, 예술을 통한 소통과 문화 
            교류의 장을 열어가는 과정이었습니다.
          </p>
        </div>

         {/* 갤러리 섹션 */}
         <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">갤러리</h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {/* 이미지들은 실제 60주년 기념 전시 사진으로 대체하세요 */}
            <img src="https://via.placeholder.com/200" alt="Gallery Image" className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
            <img src="https://via.placeholder.com/200" alt="Gallery Image" className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
            <img src="https://via.placeholder.com/200" alt="Gallery Image" className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
            <img src="https://via.placeholder.com/200" alt="Gallery Image" className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
          </div>
        </div>


        {/* 목표와 가치관 섹션 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">우리의 사명과 가치</h2>
          <p className="text-gray-700 leading-relaxed">
            서예회의 사명은 전통을 존중하며, 이를 현대적인 예술적 감각으로 승화시키는 것입니다. 서예회는 서예의 
            정체성을 지키면서도 끊임없이 새로운 표현 방식과 기술을 탐구하여 서예의 경계를 확장하고자 합니다. 우리는 
            서예를 통한 정신적 수양과 문화적 소통을 중시하며, 예술의 사회적 역할을 강화하고자 합니다.
          </p>
        </div>

        {/* 주요 활동과 성과 섹션 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">주요 활동과 성과</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>60년 동안 100여 회 이상의 전시회 개최로 서예의 대중화에 기여</li>
            <li>60년 동안 100여 회 이상의 전시회 개최로 서예의 대중화에 기여</li>
            <li>60년 동안 100여 회 이상의 전시회 개최로 서예의 대중화에 기여</li>
            <li>문화 행사 및 워크숍을 통한 서예 체험 기회 제공</li>
          </ul>
        </div>
       
        
      </div>
    </section>
  );
}