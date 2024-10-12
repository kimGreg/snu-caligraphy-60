"use clinet"

import Image from "next/image"
import face from "@/public/professor.jpeg"

export default function ProfessorSpeech() {
    return (
        <div className="flex justify-center items-center">
        <div className="max-w-2xl justify-center">
            <div className="w-full flex justify-between items-start space-x-4 pb-3">
            {/* President image next to title */}
                <div className="flex flex-wrap">
                <h2 className="text-2xl font-bold">축사</h2>
                </div>
            
                <div className="w-24 h-24">
                <Image
                src={face}
                alt="남동신"
                className="rounded-lg"
                width={100} // Thumbnail size
                height={100}
                style={{ maxWidth: "100%", height: "auto" }}
                />
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center"></h2>

            <div className="w-full flex flex-wrap justify-end pt-3">
            <p className="text-right pb-2">서울대학교 서예회 지도교수&nbsp;</p>
            <p className="text-right pb-2">남동신</p>
            </div>
            
            <p className="text-right pb-10">인문대학 국사학과 80학번</p>

        <p className="text-gray-900 leading-relaxed text-justify">
        이번에 서울대학교 서예회가 창립 60주년을 맞이하여 성대한 기념전을 개최하게 된 것을 진심으로 축하합니다.
        </p>
        <p className="text-gray-900 leading-relaxed py-2 text-justify" style={{ whiteSpace: "pre-wrap" }}>
        서울대학교 서예회는 1964년 창립 이래 지금까지 우리나라 서예 문화의 계승과 창달에 이바지하여 왔습니다. 우리 서예회는 한자와 한글의 서체를 두루 수련하되 무엇보다 기본에 충실하고자 하였으며, 동시에 사군자, 전각, 탁본, 배접 등에 이르기까지 실험적인 시도 또한 망설이지 않았습니다. 또한 서예회 회원들은 서예회원으로서의 자긍심을 가지고 각자의 인격을 함양하고 회원 간의 우애와 친목을 다지는 데에도 힘썼습니다. 동문들은 모두 서예회에서 맺은 인연과 학창 시절을 소중하게 간직하고 있습니다.
        </p>
        <p className="text-gray-900 leading-relaxed py-2 text-justify" style={{ whiteSpace: "pre-wrap" }}>
        한편 지난 60년 동안 학내외의 환경이 급변하면서 많은 대학 동아리들이 명멸해갔습니다. 서예회도 때로 어려운 시기가 있었지만, 역대 회장단과 서예회원들의 열정과 헌신적인 노력으로 서예회의 전통을 이어올 수 있었습니다. 물론 이렇게 되기까지에는 동문들의 애정 어린 관심과 격려, 그리고 대학 당국의 물심양면의 지원이 있었습니다. 모든 분들의 노고에 깊이 감사드립니다.  
        </p>
        <p className="text-gray-900 leading-relaxed py-2 text-justify" style={{ whiteSpace: "pre-wrap" }}>
        그런 점에서 오늘 맞이하는 서울대학교 서예회 창립 60주년 기념전은 서예회로서 뜻깊은 행사일 뿐 아니라, 대학 동아리 차원에서도 실로 기념비적이라고 자부합니다. 동문이자 지도교수로서 이 뜻깊은 기념전에 동참할 수 있게 된 것을 영광스럽게 생각하며, 이번 60주년 기념전을 계기로 서예회가 거듭나서 대학 문화와 서예 문화의 발전에 더욱 기여할 수 있기를 기원합니다.
        </p>

        <p className="pb-10 pt-10">
         <center>2024. 10. 01.</center>
        </p>
      </div>
      </div>
    );
  }