export default function MessagesPage() {
    return (
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-4">축사</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">총장 축사</h3>
            <p className="text-gray-600">존경하는 서예회 가족 여러분...</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">서예회총동문회장 축사</h3>
            <p className="text-gray-600">서예회의 60주년을 축하드립니다...</p>
          </div>
          {/* 추가 축사 */}
        </div>
      </section>
    );
  }