// components/Tabs.tsx
'use client'; // 클라이언트 사이드 컴포넌트로 설정

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 클라이언트 사이드에서 경로를 가져오기 위한 훅

interface TabContent {
  label: string;
  path: string;
}

interface TabsProps {
  tabs: TabContent[];
}

export default function Tabs({ tabs }: TabsProps) {
  const pathname = usePathname(); // 현재 경로를 가져오는 클라이언트 사이드 훅

  return (
    <div className="w-full mt-3 mx-auto overflow-x-auto scrollbar-hide">
      <div className="flex border-b border-gray-300 space-x-4 min-w-max">
        {tabs.map((tab, index) => {
          // 현재 경로와 탭의 경로가 정확히 일치하는지 확인
          const isActive = pathname === tab.path || pathname === `${tab.path}/`;

          return (
            <Link
              key={index}
              href={tab.path}
              className={`py-2 px-4 text-center whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'border-b-2 border-snublue text-snublue font-semibold'
                  : 'text-gray-500 hover:text-snublue'
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}