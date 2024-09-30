// app/(site)/congratulatory-speeches/alumni-president/page.tsx
import nakgwan from "@/public/nakgwan_alpha.png"
import Image from 'next/image';
import face from "@/public/simjung.png";

export default function AlumniPresidentSpeech() {
    return (
        <div className="flex justify-center items-center">
        <div className="max-w-2xl justify-center">
            <div className="w-full flex justify-between items-start space-x-2 pb-2">
                <div className="flex flex-wrap">
                <h2 className="text-2xl font-bold">서울대학교 서예회의&nbsp;</h2>
                <h2 className="text-2xl font-bold">연원과 그 방향</h2>
                </div>
                <div className="w-24 h-24">
                <Image
                src={face}
                alt="심정 박주영"
                className="rounded-lg"
                width={100} // Thumbnail size
                height={100}
                style={{ maxWidth: "100%", height: "auto" }}
                />
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-end pt-6">
            <p className="text-right pt-3 pb-2">심정(心丁) 박주영(朴周榮) </p>
            </div>

            <p className="text-right pb-1">서울대 미대 회화과 66학번</p>
            <p className="text-right pb-10">한국교원대학교 명예교수</p>
  
       

        <div className="w-full flex justify-center p-10">
        <Image src={nakgwan} alt="낙관" height={300} width={300} 
            style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
            }}></Image>
        </div>

        <p className="text-gray-900 leading-relaxed text-justify">
        &emsp;&emsp;위에 제시된 도서((圖書), 또는 낙관(落款))는 서울대학교 서예회의 대표 도서이다. 이는 물론 서예회의 초대 지도자이셨던 여초 김응현(如初 金膺顯, 1927~2007) 선생께서 손수 각(刻)하신 것이다. 서울대학교 서예회는 1964년 봄, 동숭동 캠퍼스 의과대학 구내에 위치한 함춘원(含春園)에서 여초 선생을 지도자로 모시고 출발하였다. 올해로 꼭 60주년 환갑을 맞이했다. 도서를 살펴보면 성명인(姓名印)에 해당하는 음각인(陰刻印)에서 원수함춘(園樹含春), 아호인(雅號印)에 해당하는 양각인(陽刻印)에서 침경적사(枕經籍史)-침경자사로 읽힐 수도 있다-를 관찰할 수 있는데, 이는 함춘원(含春園) 연고(緣故)를 따른 것이요, ‘침경적사’ 또는 ‘침경자사’란 ‘경적을 늘 머리맡에 두고 베개 삼아 가까이하면서 역사를 쓴다’라는 뜻일 것이다. 이런 정신적 지표를 푯대로 삼아 지난 60년간 동문 모두가 쉼 없이 우리 서예회를 지켜 왔고 또한 앞으로도 그래야 할 것이다. 우리 서예회가 창립되고 초대 지도자로 여초 선생 을 모실 때 선생은 약관 38세였으니 한창 예술혼이 무르익고 의욕적으로 자신의 서예 세계를 구축해 가고 있을 때라고 볼 수 있겠다. 그때 우리 서예회가 여초 선생의 왕성한 신생면(新生面)을 만났다는 것은 보통의 행운이 아니었다고 하겠다.<br/><br/>

        &emsp;&emsp;아는 사람은 다 아는 바와 같이, 여초 선생의 서예 세계는 추사 이래 처음 보는 것이라고 해도 그다지 과언이 아니라고 할 정도로 찬연한 빛을 발하고 있는 바, 필자의 식견으로 보건대 한국 현대 서단에서 검여 류희강(劍如 柳熙綱, 1911~1976)과 여초가 쌍벽(雙璧)을 이루고 있다고 하겠다. 그와 같이 우뚝한 서예 세계를 이룩한 선생을 모시고 서예를 연마한 우리 서예회는 나날이 그 서예 수준과 정치성(精緻性)이 향상되어 전국학생휘호대회에서 대상과 단체상을 거의 독점하다시피 휩쓸었다. 그러나 아쉽게도 서울대학교가 1975년 관악 캠퍼스로 이동하게 되면서 여초 선생께서 나오시기 어렵게 되었다. 그러던 어느 날 여초 선생께서 필자를 불러 서예회 지도를 맡으라는 말씀을 하셨다. 능력 부족을 이유로 극구 사양하였으나 교학상장(敎學相長)의 자세를 견지하고 부지런히 연구하면서 지도에 임하면 충분히 이뤄낼 수 있을 것이라고 격려해주셨다. 그런 어려운 곡절을 거쳐 필자가 약관 31세 때 서예회 지도자로 임하게 되었다. 필자는 젊음을 무기 삼아 의욕적으로 지도에 임했고, 관악으로 옮기면서 잠시 주춤했던 서예회의 활기도 되살아나게 되었다. 그에 따른 결과로 전국학생휘호대회에서 대상과 단체상은 물론이고 지도자상까지 받게 되었다.<br/><br/>

        &emsp;&emsp;서예 회원들의 학구열이 거의 절정에 이르게 되면서 회지, 『자하』(紫霞) 발간을 비롯해, 파트별 스터디 그룹(예를 들어 구양순반, 유공권반, 안진경반, 육조반, 저수량반 등)을 구성해서 더욱 깊은 연수에 매진하기도 했다. 그렇게 열정적인 8년여의 폭풍 노도 같은 학구의 세월이 흐른 뒤에 1982년 필자도 서예회 지도를 할 수 없게 되었다. 대학교수의 외부 출강을 통제하려는 80년대 초 군부 정권의 지침에 따를 수밖에 없었기 때문이다. 걸출한 연구 결과를 보여준 죽생 정범훈(竹生 鄭範薰)에게 지도의 봉을 넘겨주고 필자는 본업에만 전적으로 매진하는 도리밖에 없었다. 8년여의 서예회 지도 경력은 필자의 청춘을 오롯이 바친 크나큰 열정으로 기억하고 있으며 그것을 바탕으로 해서 필자의 회화세계(繪畵世界)나 서예세계(書藝世界)가 크게 진전되었음을 부인할 수 없다. 우리 서예회 동문들은 60년 전통을 잇는 그 역사적 의미(여초의 서예 정신을 잇는다는 자부심과 긍지)를 정신적 지주로 부여잡고 개개인의 서예 세계와 더불어 인생 전반의 자양분으로 삼게 되기를 기원하는 바이다.<br/><br/>
        </p>
        <p><center>2024. 6. 11</center></p>
      </div>
      </div>
    );
  }