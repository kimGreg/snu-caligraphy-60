'use client';

import { useEffect, useRef } from 'react';

interface CaptionAnimationProps {
  title: string;
  style: string;
  writer: string;
  writerDept: string;
  writerBio: string;
  description: string;
}

export default function CaptionAnimation({ title, style, writer, writerDept, writerBio, description }: CaptionAnimationProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const styleRef = useRef<HTMLHeadingElement | null>(null);
  const writerRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const writerBioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = [titleRef.current, styleRef.current, writerRef.current, descriptionRef.current, writerBioRef.current];
    const options = {
      threshold: 0.1,
    };

    elements.forEach((element) => {
      if (element) {
        element.classList.remove('show');
      }
    });

    const runAnimation = (entry: IntersectionObserverEntry, index: number) => {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 300);
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          runAnimation(entry, index);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`flex-1 mt-1 lg:mt-0 lg:px-5 px-0`}>
      <div className="text-end">
        <h2 ref={titleRef} className="text-2xl mb-3 font-bold fade-in-up">{title}</h2>
        <h4 ref={styleRef} className="text-lg text-gray-800 mb-3 fade-in-up">{style}</h4>
        <h3 ref={writerRef} className="text-lg mb-10 fade-in-up">{writer} • {writerDept}</h3>
      </div>
      <p ref={descriptionRef} className="text-lg fade-in-up pb-15" style={{ whiteSpace: "pre-wrap" }}>{description}</p>

      <div className="flex justify-start w-full pt-32">
        <div ref={writerBioRef} className="writer-bio-card w-full max-w-lg fade-in-up r">
            <div className="writer-header">
            <h2 className="writer-name">{writer}</h2>
            <p className="writer-department">{writerDept}</p>
            </div>
            <div className="writer-bio-content">
            
                <p className="writer-bio-text"  style={{ whiteSpace: "pre-wrap" }}>{writerBio}</p>
            </div>
        </div>

      </div>
      

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

        .writer-bio-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow: hidden;
          justify-self: center;
        }

        .writer-header {
          
          align-items: center;
          justify-content: space-between;
        }

        .writer-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .divider {
          flex-grow: 1;
          height: 1px;
          background: #ccc;
          margin-left: 16px;
        }

        .writer-bio-content {
          padding-top: 12px;
          border-top: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .writer-department {
          font-size: 1rem;
          color: #666;
        }

        .writer-bio-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.6;
        }

       
      `}</style>
    </div>
  );
}