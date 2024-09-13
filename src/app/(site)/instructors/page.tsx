export default function InstructorsPage() {
    return (
      <section className="bg-white py-8">
        <h2 className="text-3xl font-bold mb-4">역대 지도강사</h2>
        <ul className="space-y-4">
          <li className="border-b pb-2">
            <h3 className="text-xl font-semibold">이상연 선생님 (1020-1300)</h3>
            <p className="text-gray-600">응애......</p>
          </li>
          <li className="border-b pb-2">
            <h3 className="text-xl font-semibold">김재윤 선생님 (1964-1980)</h3>
            <p className="text-gray-600">컴퓨터공학.....</p>
          </li>
          {/* 추가 지도강사 */}
        </ul>
      </section>
    );
  }