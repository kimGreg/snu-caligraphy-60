'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import history from "@/public/history.bmp"

const historyData = [
  {
    title: '서울대학교 서예회의 창립과 동숭동 시대',
    description: '',
    header: true,
  },
  {
    year: '1964',
    title: '서울대학교 서예회 창립',
    description: '동숭동 대학 본부 1층에서 창립',
  },
  {
    title: '초대 지도 강사: 故 여초 김응현(如初 金膺顯)',
    description: '',
  },
  {
    year: '1965',
    month: '10',
    title: '제1회 서울대학교 서예전 개최',
    description: '서울대학교 서예전(정기 전시회)이 처음으로 개최되었습니다.',
  },
  {
    year: '1974',
    month: '11',
    title: '제9회 서울대학교 서예전 개최',
    description: '',
  },
  {
    title: '관악캠퍼스 시대의 발흥과 서예회의 현재',
    description: '',
    header: true,
  },
  {
    year: '1975',
    title: '서울대학교 관악캠퍼스 이전',
    description: '',
  },
  {
    title: '제2대 지도 강사: 심정 박주영(心丁 朴周榮)',
    description: '',
  },
  {
    year: '1975',
    month: '11',
    title: '제10회 서울대학교 서예전 개최',
    description: '',
  },
  {
    year: '1981',
    month: '10',
    title: '제1회 서울대학교 서예회 동문회 개최',
    description: '서울대학교 서예회 동문회가 처음으로 개최되었습니다.',
  },
  {
    year: '1982',
    title: '제3대 지도 강사: 죽생 정범훈(竹生 鄭範勳)',
    description: '',
  },
  {
    year: '1984',
    month: '03',
    title: '창립 20주년 기념전 개최',
    description: '서울대학교 서예회 창립 20주년을 맞아 기념전이 열렸습니다.',
  },
  {
    year: '1994',
    month: '11',
    title: '창립 30주년 기념전 개최',
    description: '서울대학교 서예회 창립 30주년 기념전이 개최되었습니다.',
  },
  {
    year: '1999',
    title: '제4대 지도 강사: 초민 박용설(艸民 朴龍卨)',
    description: '',
  },
  {
    year: '2002',
    title: '제5대 지도 강사: 금정초 남기매(欽正艸 南基梅)',
    description: '',
  },
  {
    year: '2004',
    month: '11',
    title: '창립 40주년 기념전 개최',
    description: '',
  },
  {
    year: '2014',
    month: '08',
    title: '창립 50주년 기념전 개최',
    description: '',
  },
  {
    year: '2024',
    month: '05',
    title: '제96회 서울대학교 서예전 개최',
    description: '',
  },
  {
    year: '2024',
    month: '10',
    title: '서울대학교 서예회 창립 60주년 기념전 개최',
    description: '',
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
        <h1 className="text-3xl  mb-8">서예회 연혁</h1>
        {/* <div className="p-3">
        <Image src={history} alt="창립" height={500} width={500}></Image>
        </div> */}
       
        <div className="relative border-l-4 border-snublue pl-6">
          {historyData.map((event, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                itemsRef.current[index] = el; // 콜백 ref 사용
              }}
              className="mb-3 ml-2 relative  opacity-0 transform translate-y-10 transition-all duration-500"
            >
              {((event.year || event.header) && (index!=0))?<div className="pb-6"></div>:<></>}
              {(event.header && (index!=0))?<div className="pb-2"></div>:<></>}
              <div className="flex items-end">
                <h2 className="text-xl font-semibold text-snublue">{event.year}</h2>
                <h2 className="text-xl  text-snublue">{event.month?"." + event.month:""}</h2>
              </div>
              
              <h3 className={`${event.header?"text-2xl ":"text-lg font-semibold "} text-gray-900`}>{event.title}</h3>
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