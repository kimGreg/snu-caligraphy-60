// app/(site)/about/page.tsx

import title from "@/public/title/title.png"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="py-10 bg-gray-50  w-full ">
      <div className="container mx-auto w-full px-2 lg:px-6 ">
        <div className="flex justify-center px-0 lg:px-8">
            <Image src={title} alt="서울대학교 서예회 창립60주년 기념전" height={500} width={1000}></Image>
        </div>
        
      </div>
    </section>
  );
}