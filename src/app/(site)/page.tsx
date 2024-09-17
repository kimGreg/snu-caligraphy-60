// app/(site)/about/page.tsx

import title from "@/public/title/title.png"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
            <Image src={title} alt="서울대학교 서예회 창립60주년 기념전" height={500} width={1000}></Image>
        </div>
        
        
        
      </div>
    </section>
  );
}