
// app/(site)/congratulatory-speeches/layout.tsx
import { ReactNode } from 'react';
import Tabs from '@/app/components/Tabs';

const tabs = [
    {
      label: '총장',
      path: '/messages/president',
      content: '총장의 축사 내용입니다. 환영합니다...',
    },
    {
      label: '서예회총동문회장',
      path: '/messages/alumni_president',
      content: '서예회총동문회장의 축사 내용입니다. 뜻깊은 자리입니다...',
    },
    {
      label: '지도교수',
      path: '/messages/professor',
      content: '지도교수의 축사 내용입니다. 많은 성취를 축하드립니다...',
    },
    {
      label: '서예회장',
      path: '/messages/club_president',
      content: '서예회장의 축사 내용입니다. 함께해주셔서 감사합니다...',
    },
  ];

// 레이아웃 컴포넌트 정의
export default function CongratulatorySpeechesLayout({
    children,
  }: {
    children: ReactNode;
  }) {
  
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="">
          <Tabs tabs={tabs} />
        </nav>
        {children}
      </div>
    );
  }