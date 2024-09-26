// app/(site)/congratulatory-speeches/president/page.tsx
import Image from "next/image"
import face from "@/public/club_president.bmp"


export default function ClubPresidentSpeech() {
    return (
        <div className="flex justify-center items-center">
        <div className="max-w-2xl justify-center">
        <div className="w-full flex justify-between items-start space-x-2 pb-3">
            {/* President image next to title */}
                <div className="flex flex-wrap">
                <h2 className="text-2xl font-bold">서울대학교 서예회 창립&nbsp;</h2>
                <h2 className="text-2xl font-bold">60주년을 기념하며</h2>
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

            <div className="w-full flex flex-wrap justify-end pt-6">
            <p className="text-right pb-2">서울대학교 서예회 회장&nbsp;</p>
            <p className="text-right pb-2">이상연</p>
            </div>

            <p className="text-right pb-10">인문대학 고고미술사학과 23학번</p>
            

        <p className="text-gray-900 leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>
        2024년, 오랜 전통과 유구한 역사를 자랑하는 서울대학교 서예회가 창립 60주년을 맞이하였습니다. 갑진년(甲辰年)의 한 해가 가을의 정점에 걸린 가운데, 여러 동문 선배님들을 모시고 서울대학교 서예회 창립 60주년 기념전을 개최하게 되어 매우 영광입니다. 
        </p>
        <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
1964년에 창립된 이래로 서울대학교 서예회가 60년 동안 남겨온 세월의 자취는 여타 동아리들에서 찾아볼 수 없는 빛나는 성과물이라고 생각합니다. 관악 캠퍼스로의 이전에서부터 코로나-19에 이르기까지 많은 역동과 역경의 시기를 지나면서도, 서울대학교 서예회만이 가진 전아(典雅)한 서풍과 명맥은 96회에 달하는 서예전 개최를 통해 2024년인 현재까지 이어져 오고 있습니다. 서울대학교 서예회가 이러한 빛나는 자취를 남길 수 있었던 배경에는 많은 동문 선배님들의 노력과 헌신이 있었다고 생각합니다. 그러한 점에서, 이번 서울대학교 서예회 창립 60주년 기념전은 그동안 동문 선배님들께서 기울이신 노력과 헌신을 통해 이룩한 빛나는 성과를 종합하고 공유하는 자리라고 말할 수 있습니다. 
</p>
        <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
저는 2024년 서예회 회장을 역임하면서 항상 막중한 책임감을 느끼며, 서울대학교 서예회 창립 60주년 기념전을 성황리에 개최하고자 노력하였습니다. 기념전을 준비하면서 많은 시행착오를 겪기도 하였지만, 물심양면으로 도움을 아끼지 않은 학생 회원들과 진심으로 응원해 주신 동문 선배님들 덕분에 원활하게 기념전을 준비할 수 있었습니다. 서울대학교 서예회 창립 60주년 기념전 준비에 힘써준 학생 회원들께 감사의 말씀을 전합니다. 아울러, 이번 기념전 기획에 큰 도움을 주신 故 노태천 선배님과 김진기 선배님을 비롯한 여러 동문 선배님들과 남동신 지도교수님께도 감사의 말씀을 올립니다.
</p>
        <p className="text-gray-900 leading-relaxed py-2" style={{ whiteSpace: "pre-wrap" }}>
마지막으로, 이번 기념전이 1964년 갑진년에서 2024년 갑진년까지 서울대학교 서예회가 이룩한 빛나는 자취를 종합하고 공유하는 것을 넘어 앞으로의 새로운 갑진년을 향해 나아가는 자리가 되길 기원합니다. 감사합니다. 
        </p>


        <p className="pb-10 pt-10">
         <center>2024. 10. 01.</center>
        </p>
       
      </div>
      </div>
    );
  }