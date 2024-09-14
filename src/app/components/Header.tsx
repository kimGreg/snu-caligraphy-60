'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md relative z-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* 로고 */}
        <h1 className="text-xl font-bold">서울대학교 서예회 60주년 기념전</h1>

        {/* 햄버거 메뉴 버튼 (모바일용) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav
          className={`${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:opacity-100 lg:max-h-full'
          } lg:flex lg:items-center lg:space-x-6 lg:ml-auto absolute lg:relative top-14 lg:top-0 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent overflow-hidden transition-all duration-300 ease-in-out p-4 lg:p-0 z-10`}
        >
          <Link href="/" onClick={closeMenu} className="block py-2 lg:py-0 lg:inline-block hover:text-gray-300">
            소개글
          </Link>
          <Link href="/history" onClick={closeMenu} className="block py-2 lg:py-0 lg:inline-block hover:text-gray-300">
            연혁
          </Link>
          <Link href="/instructors" onClick={closeMenu} className="block py-2 lg:py-0 lg:inline-block hover:text-gray-300">
            역대 지도강사
          </Link>
          <Link href="/messages" onClick={closeMenu} className="block py-2 lg:py-0 lg:inline-block hover:text-gray-300">
            축사
          </Link>
          <Link href="/works" onClick={closeMenu} className="block py-2 lg:py-0 lg:inline-block hover:text-gray-300">
            작품
          </Link>
        </nav>
      </div>
    </header>
  );
}