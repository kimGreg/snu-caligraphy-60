'use client';  // 클라이언트 컴포넌트

import { useState } from 'react';
import { get_online_imgae_url } from '@/app/util';

interface GalleryProps {
  id: number;
}

export default function Gallery({ images } : {images : GalleryProps[]}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 이미지 클릭 시 모달 열기
  const openModal = (url: string) => {
    setSelectedImage(url);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={get_online_imgae_url(String(image.id), false)}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(get_online_imgae_url(String(image.id), true))}
            className="gallery-image"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img src={selectedImage} className="modal-content" />
        </div>
      )}

      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 2px;
          padding: 10px;
        }
        .gallery-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .gallery-image:hover {
          transform: scale(1.05);
        }
        .modal {
          display: flex;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          max-width: 90%;
          max-height: 90%;
        }
        .close {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 40px;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}