'use client';

import { useEffect, useRef } from 'react';

interface CaptionAnimationProps {
  title: string;
  style: string;
  writer: string;
  writerDept: string;
  description: string;
}

export default function CaptionAnimation({ title, style, writer, writerDept, description }: CaptionAnimationProps) {
  // Refs to target text sections
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const styleRef = useRef<HTMLHeadingElement | null>(null);
  const writerRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const elements = [titleRef.current, styleRef.current, writerRef.current, descriptionRef.current];
    const options = {
      threshold: 0.1,
    };

    // 애니메이션 초기화: 클래스만 제거하여 초기화 상태 유지
    elements.forEach((element) => {
      if (element) {
        element.classList.remove('show'); // 애니메이션 클래스만 제거
      }
    });

    // 애니메이션 실행 함수
    const runAnimation = (entry: IntersectionObserverEntry, index: number) => {
      setTimeout(() => {
        entry.target.classList.add('show'); // show 클래스를 추가하여 애니메이션 실행
      }, index * 300); // 순차적으로 300ms 간격으로 실행
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          runAnimation(entry, index); // 애니메이션 실행
          observer.unobserve(entry.target); // 애니메이션이 실행된 요소는 더 이상 감지하지 않음
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    elements.forEach((element) => {
      if (element) observer.observe(element); // 모든 요소를 감지하도록 설정
    });

    return () => {
      observer.disconnect(); // 컴포넌트가 언마운트될 때 감지 중지
    };
  }, []);

  return (
    <div className={`flex-1 mt-1 lg:mt-0 lg:px-5 px-0`}>
      <div className="text-end">
        <h2 ref={titleRef} className="text-2xl mb-3 font-bold fade-in-up">{title}</h2>
        <h4 ref={styleRef} className="text-lg text-gray-600 mb-3 fade-in-up">{style}</h4>
        <h3 ref={writerRef} className="text-lg mb-10 fade-in-up">{writer} • {writerDept}</h3>
      </div>
      <p ref={descriptionRef} className="text-lg fade-in-up" style={{ whiteSpace: "pre-wrap" }}>{description}</p>
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}