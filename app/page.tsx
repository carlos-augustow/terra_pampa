"use client";

import Image from "next/image";
import Nav from "@/components/ui/nav";
import CarouselComponent from "@/components/ui/carousel";
import Beneficios from "@/components/beneficos";
import Mosaico from "@/components/mosaico";
import Produtos from "@/components/produtos";
import Div_Video from "@/components/div_video";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center">
        <CarouselComponent />
        {/* <Div_Video /> */}
        <Beneficios />
        <Mosaico />
        <Produtos exibeTitulo={true} />
      </main>
    </>
  );
}
