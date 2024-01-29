"use client";

import Image from "next/image";
import Nav from "@/components/ui/nav";
import CarouselComponent from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <CarouselComponent />
      </main>
    </>
  );
}
