// app/(site)/congratulatory-speeches/page.tsx
import Tabs from '@/app/components/Tabs'

import { redirect } from 'next/navigation'

export default function CongratulatorySpeeches() {
    redirect("messages/president");
//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">축사</h1>
        
//       </div>
//     </section>
//   );
}