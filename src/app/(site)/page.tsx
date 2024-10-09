// app/(site)/about/page.tsx

import title from "@/public/title/title.png"
import Image from "next/image"


export default function AboutPage() {
  return (
    <section className="flex py-10 bg-gray-50  w-full justify-center ">
      <div className="flex flex-col mx-auto px-2 lg:px-6 justify-center ">
        <div className="flex w-full justify-center">
            <div className=" max-w-3xl px-0 lg:px-8 pb-10">
            <Image src={title} alt="서울대학교 서예회 창립60주년 기념전" height={500} width={1000}></Image>
            </div>
        </div>
        <div className="flex justify-left lg:p-10 p-1">
        <div className="space-y-8 max-w-3xl text-justify">
            <p className="text-xl leading-8 ">
            안녕하십니까. 서울대학교 중앙동아리 서예회입니다. 
            </p>

            <p>
            서울대학교 서예회는 올해로 창립 60주년을 맞은 서울대학교 중앙동아리로, 동숭동 캠퍼스 시절부터 현재의 관악 캠퍼스에 이르기까지 서울대학교의 살아 숨 쉬는 역사를 간직한 동아리입니다. 이러한 유구한 역사를 지닌 서울대학교 서예회는 정기적인 서예전 개최를 통해 서예회가 이루어 낸 예술적 성과를 나눔으로써, 서울대학교 학생과 구성원들의 예술성을 함양하고 창의성을 발휘하도록 독려하는 전통예술 동아리입니다.
            </p>


            <p>
            서울대학교 서예회는 근현대 한국 서단의 최고 대가인 故 여초 김응현(如初 金膺顯, 1927.1.22.~2007.2.1.) 선생님을 모시고 동숭동 대학 본부에서 1964년에 창립된 후, 이듬해인 1965년 10월 21일 서울대학교 교수회관에서 제1회 정기 전시회를 개최하였습니다. 1975년 서울대학교가 관악캠퍼스로 이전한 이후부터, 서예회 동문인 심정 박주영(미술대학 회화과 66학번) 선생님의 지도를 받았습니다. 그 이후에는 1980년대에는 전국대학휘호대회에서 대상을 수상한 죽생 정범훈(경영대학 경영학과 76학번) 선생님의 지도를 받았으며, 1990년대 말에는 2024년 일중서예대상을 수상한 초민 박용설(사범대학 체육과 67학번) 선생님의 지도를, 2000년대에는 초민 박용설 선생님을 사사한 금정초 남기매 선생님의 지도를 받았습니다. 
            </p>

            <p>
            굴곡이 많았던 한국 현대사의 흐름 속에서, 서울대학교 서예회의 명맥은 앞서 밝힌 훌륭한 선생님들의 지도와 동문 선배들의 아낌없는 지원, 그리고 바쁜 일상 속에서도 형설지공(螢雪之功)의 태도로 서예 실력을 연마한 현 학생 회원의 노력으로 2024년인 현재까지 이어져 오고 있습니다.
            </p>

            <p>
            올해로 창립 60주년을 맞아 개최하는 ‘서울대학교 서예회 창립 60주년 기념전’이 서예회 동문 선배들과 현 학생 회원이 함께 모여, 서울대학교 서예회가 지금까지 추구한 예술성과 정신을 확인하고, 앞으로 서예회가 나아가야 할 방향을 제시하는 기념비적인 서예전이 되길 기대합니다.
            </p>


        </div>
        </div>
      </div>
    </section>
  );
}