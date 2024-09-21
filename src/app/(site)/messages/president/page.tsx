// app/(site)/congratulatory-speeches/chancellor/page.tsx

import Image from "next/image";
import sign from "@/public/president/sign.png";
import head from "@/public/president/president.jpeg";

export default function PresidentSpeech() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-2xl w-full flex flex-col justify-center items-start space-y-6">
        {/* Flexbox to position image next to title */}
        <div className="w-full flex justify-between items-start space-x-4 pb-10">
          {/* President image next to title */}
          <h2 className="text-2xl font-bold">서예회 60주년 축사</h2>
          <div className="w-24 h-24">
            <Image
              src={head}
              alt="유홍림"
              className="rounded-lg"
              width={100} // Thumbnail size
              height={100}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Text content */}
        <div>
          <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
            안녕하십니까, 서울대학교 총장 유홍림입니다.
          </p>
          <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
            유구한 역사와 전통을 자랑하는 서울대학교 서예회의 창립 60주년과 이를 기념하는 회갑전 개최를 진심으로 축하합니다.
          </p>
          <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
            예부터 서예는 ‘서여기인(書如其人)’이라 하여 한 사람의 인격과 학식을 나타내는 것으로 여겨졌습니다. 당나라의 서예가 유공권(柳公權)은 “마음이 발라야 붓도 바르게 되며(心正則筆正), 붓이 발라야 서법도 익힐 수 있다(筆正乃可效)”라고 했습니다.
          </p>
          <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
            그동안 서울대학교 서예회는 우리 학생들이 서예를 통해 수양(修養)하고, 함께 호연지기(浩然之氣)를 기르는 동아리이자 학당(學堂)으로 역할을 해왔습니다. 서예회에서 절차탁마(切磋琢磨)한 우리 동문들은 서예로 닦은 인격과 지혜로 우리사회의 큰 재목(材木)이 되었습니다.
          </p>
          <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
            서예회가 영예로운 60주년을 맞기까지에는 많은 분의 헌신이 있었을 줄로 압니다. 서예회에 정성을 기울여 오신 여러 지도교수님과 강사님께 감사드리며, 선배들의 자랑스러운 전통을 이어가기 위해 구슬땀을 흘려온 우리 학생들에게도 축하와 격려의 마음을 전합니다. 이번 전시를 통해 자랑스러운 역사를 함께 일군 서예회 동문들의 자긍심이 더욱 고취되고, 동문 간의 결속도 더욱 돈독해지길 바랍니다.
          </p>
          <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
            다시 한 번 서예회 창립 60주년을 축하드리며, 서울대학교 서예회의 무궁한 발전과 동문 여러분의 건승을 기원합니다.
          </p>
          <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
            감사합니다.
          </p>

          <p className="pb-10">
            <center>2024년 9월 24일</center>
          </p>

          <div className="w-full flex justify-end">
            <div className="grid grid-cols-2 gap-1 items-center">
              <p>서울대학교 총장</p>
              <Image src={sign} height={60} width={80} alt="유홍림" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}