"use client"

import Gallery from "./gallery"

export default async function OnlineWorksPage() {
  const artworks = [...Array(121)].map((_,i) =>{
        return {id : i+1};
    });

  return <section className="bg-gray-50 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">{'온라인 전시실'}</h2>
        <Gallery images={artworks}></Gallery>
    </div>
    </section>
}