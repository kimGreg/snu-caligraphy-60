// components/Lightbox.tsx
'use client';

import { useState } from 'react';

interface LightboxProps {
  imageUrl: string;
  altText: string;
}

export default function Lightbox({ imageUrl, altText }: LightboxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
    setIsHovered(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsHovered(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={altText}
        className={`w-full h-auto max-h-[80vh] object-contain cursor-pointer transition-transform duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        onClick={handleImageClick}
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-medium font-medium transition-opacity duration-200 opacity-100 pointer-events-none">
            크게 보려면 클릭하세요
        </div>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={imageUrl}
              alt={altText}
              className="w-auto h-auto max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}