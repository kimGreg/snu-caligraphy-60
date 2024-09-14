// components/LoadingSpinner.tsx
'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* 로딩 애니메이션 */}
        <div className="relative w-16 h-16 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
        {/* 로딩 텍스트 */}
        <p className="mt-4 text-gray-600 text-sm font-semibold tracking-wide">
          불러오는 중
        </p>
      </div>
    </div>
  );
}