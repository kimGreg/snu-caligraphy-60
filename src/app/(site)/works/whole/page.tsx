// app/works/page.tsx

import { PrismaClient, Artwork } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

// 서버에서 작품 목록을 가져오는 함수
async function getArtworks(): Promise<Artwork[]> {
  return prisma.artwork.findMany({
    orderBy: { id: 'asc' },
  });
}

// 작품 목록을 SSR로 렌더링하는 페이지
export default async function ArtworkListPage() {
  const artworks = await getArtworks();

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">작품 목록</h1>
      <table className="table-auto w-full text-left border-collapse border border-gray-400">
        <thead>
          <tr>
            {/* <th className="border border-gray-400 p-2"></th> */}
            <th className="border border-gray-300 p-2">제목</th>
            <th className="border border-gray-300 p-2">작가</th>
            <th className="border border-gray-300 p-2">소속</th>
            <th className="border border-gray-300 p-2">서체</th>
          </tr>
        </thead>
        <tbody>
          {artworks.map((artwork) => (
            <tr key={artwork.id}>
              {/* <td className="border border-gray-400 p-2"> 
                <Link href={`/works/${artwork.id}`} className="text-blue-500 hover:underline">{artwork.id}</Link>
              </td> */}
              <td className="border border-gray-300 p-2">
                <Link href={`/works/${artwork.id}`} className="text-blue-500 hover:underline">{artwork.title}</Link>
              </td>
              <td className="border border-gray-300 p-2">{artwork.writer}</td>
              <td className="border border-gray-300 p-2">{artwork.writerDept}</td>
              <td className="border border-gray-300 p-2">{artwork.style}</td>
              {/* <td className="border border-gray-400 p-2">{artwork.category}</td> */}
            </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  );
}