
// app/(site)/congratulatory-speeches/layout.tsx
import { ReactNode } from 'react';
import Tabs from '@/app/components/Tabs';

const tabs = [
    {
      label: '서울대학교 총장',
      path: '/messages/president',
    },
    {
      label: '서예회 동창회장',
      path: '/messages/alumni_president',
    },
    {
        label: '심정 박주영',
        path: '/messages/simjung',
      },
    {
      label: '지도교수',
      path: '/messages/professor',
    },
    {
      label: '서예회장',
      path: '/messages/club_president',
    },
  ];

// 레이아웃 컴포넌트 정의
export default function CongratulatorySpeechesLayout({
    children,
  }: {
    children: ReactNode;
  }) {
  
    return (
      <div className="min-h-screen flex flex-col space-y-10 pb-12">
       
        <nav className="">
            <h2 className="text-2xl text-snublue pt-5 pb-3">축사</h2>
          <Tabs tabs={tabs} />
        </nav>
        <div className="p-2">
        {children}
        </div>
       
      </div>
    );
  }