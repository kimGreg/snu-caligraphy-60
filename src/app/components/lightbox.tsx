// components/Lightbox.tsx
'use client';

import { useState, useEffect } from 'react';

import LoadingSpinner from './LoadingSpinner';

interface LightboxProps {
  imageUrl: string;
  altText: string;
}

export default function Lightbox({ imageUrl, altText }: LightboxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // 이미지 로딩 상태

  const handleImageClick = () => {
    setIsModalOpen(true);
    setIsHovered(false);
    document.body.style.overflow = 'hidden'; // 모달이 열리면 스크롤 방지
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsHovered(false);
    document.body.style.overflow = ''; // 모달이 닫히면 스크롤 활성화
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''; // 컴포넌트 언마운트 시 스크롤 복구
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isLoaded &&  <LoadingSpinner />}
      {/* 이미지 */}
      <img
        src={imageUrl}
        alt={altText}
        className={`w-full h-auto max-h-[80vh] object-contain cursor-pointer transition-transform duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`} // 로딩이 완료되면 투명도 조정
        onLoad={() => setIsLoaded(true)} // 이미지가 로드되면 상태 업데이트
        onClick={handleImageClick}
      />
      
      {isHovered && isLoaded && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-medium transition-opacity duration-200 opacity-100 pointer-events-none">
            크게 보려면 클릭하세요
        </div>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={imageUrl}
              alt={altText}
              onClick={closeModal}
              className="w-auto h-auto max-w-full max-h-screen object-contain p-5"
            />
          </div>
        </div>
      )}
    </div>
  );
}