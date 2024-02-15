"use client";

import Image from "next/image";
import Nav from "@/components/ui/nav";
import CarouselComponent from "@/components/ui/carousel";
import Beneficios from "@/components/beneficos";
import Mosaico from "@/components/mosaico";
import Produtos from "@/components/produtos";
import Div_Video from "@/components/div_video";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main className="flex flex-col items-center justify-center mt-[7.75rem]">
        <CarouselComponent />
        {/* <Div_Video /> */}
        <Beneficios />
        <Mosaico />
        <Produtos exibeTitulo={true} />
        <Footer />
      </main>
    </div>
  );
}
