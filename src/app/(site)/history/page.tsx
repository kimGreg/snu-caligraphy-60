// app/(site)/history/page.tsx
'use client';

import { useEffect, useRef } from 'react';

const historyData = [
  {
    year: '19??',
    title: '서울대학교 서예회 창립',
    description:
      '서울대학교 서예회가 설립되어 전통 서예의 가치를 계승하고 새로운 서예 예술의 가능성을 모색하기 시작했습니다.',
  },
  {
    year: '2003',
    title: '김재윤 탄생',
    description: '김재윤이 태어났습니다.',
  },
  {
    year: '2003',
    title: '김재윤 탄생',
    description: '김재윤이 태어났습니다.',
  },
  {
    year: '2003',
    title: '김재윤 탄생',
    description: '김재윤이 태어났습니다.',
  },
  {
    year: '2003',
    title: '김재윤 탄생',
    description: '김재윤이 태어났습니다.',
  },
  {
    year: '2003',
    title: '김재윤 탄생',
    description: '김재윤이 태어났습니다.',
  },
  {
    year: '2003',
    title: '김재윤 탄생',
    description: '김재윤이 태어났습니다.',
  },
  {
    year: '2004',
    title: '이상연 탄신',
    description: '이상연이 태어났습니다.',
  },
  {
    year: '2024',
    title: '서울대학교 서예회 회갑전',
    description: '60주년 기념전 개최.',
  },
];

export default function HistoryPage() {
  // useRef의 타입을 명시적으로 HTMLDivElement 배열로 설정
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 300); // 순서대로 300ms 간격으로 나타나도록 설정
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">서예회 연혁</h1>
        <div className="relative border-l-4 border-snublue pl-6">
          {historyData.map((event, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                itemsRef.current[index] = el; // 콜백 ref 사용
              }}
              className="mb-10 ml-4 relative before:absolute before:w-3 before:h-3 before:bg-snublue before:rounded-full before:left-[-1.6rem] before:top-[10px] opacity-0 transform translate-y-10 transition-all duration-500"
            >
              <h2 className="text-xl font-semibold text-snublue">{event.year}</h2>
              <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
              <p className="text-gray-800">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}