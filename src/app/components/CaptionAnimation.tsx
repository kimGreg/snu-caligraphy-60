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
    const options = {
      threshold: 0.1,
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing once it has shown
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe each section
    if (titleRef.current) observer.observe(titleRef.current);
    if (styleRef.current) observer.observe(styleRef.current);
    if (writerRef.current) observer.observe(writerRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      observer.disconnect();
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
    </div>
  );
}