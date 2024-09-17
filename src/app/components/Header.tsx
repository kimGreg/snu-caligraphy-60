'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import snu_logo from "@/public/snu_logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 모달 열기
  const openMenu = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 10); // 짧은 지연시간을 주어 애니메이션이 자연스럽게 시작되도록 함
  };

  // 모달 닫기
  const closeMenu = () => {
    setIsOpen(false);
  };

  // 모달이 닫힐 때 애니메이션을 적용하고 나서 DOM에서 제거
  useEffect(() => {
    if (!isOpen && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // 애니메이션 지속 시간과 동일하게 설정
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  return (
    <header className="fixed top-0 left-0 w-full text-white z-20 bg-snublue_light shadow-md">
      <div className="container mx-auto flex items-center justify-between pl-3 pr-4 py-3 relative">
        {/* 로고 */}
        <Link href="/" className="flex items-center relative space-x-2">
          <Image src={snu_logo} alt="logo" width={47} height={47} />
          <div>
            <h1 className="text-sm font-bold">서울대학교 서예회</h1>
            <h1 className="text-md font-bold">창립 60주년 기념전</h1>
          </div>
        </Link>

        {/* 햄버거 메뉴 버튼 (모바일용) */}
        <div className="lg:hidden z-40 relative">
          <button onClick={isOpen ? closeMenu : openMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 네비게이션 메뉴 (데스크탑용) */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6 lg:ml-auto">
        <Link href="/" className="hover:text-gray-300">
            홈
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            소개글
          </Link>
          <Link href="/history" className="hover:text-gray-300">
            연혁
          </Link>
          <Link href="/instructors" className="hover:text-gray-300">
            역대 지도강사
          </Link>
          <Link href="/messages" className="hover:text-gray-300">
            축사
          </Link>
          <Link href="/works" className="hover:text-gray-300">
            작품
          </Link>
        </nav>
      </div>

      {/* 모바일 메뉴 모달 */}
      {isVisible && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        >
          <div
            className={`p-6 space-y-4 w-64 text-center relative transform transition-transform duration-300 ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="/" onClick={closeMenu} className="block py-2 hover:text-gray-300">
              홈
            </Link>
            <Link href="/about" onClick={closeMenu} className="block py-2 hover:text-gray-300">
              소개글
            </Link>
            <Link href="/history" onClick={closeMenu} className="block py-2 hover:text-gray-300">
              연혁
            </Link>
            <Link href="/instructors" onClick={closeMenu} className="block py-2 hover:text-gray-300">
              역대 지도강사
            </Link>
            <Link href="/messages" onClick={closeMenu} className="block py-2 hover:text-gray-300">
              축사
            </Link>
            <Link href="/works" onClick={closeMenu} className="block py-2 hover:text-gray-300">
              작품
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}