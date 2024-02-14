`use client`;
import React, { use } from "react";
import Nav from "@/components/ui/nav";
import Div_Video from "@/components/div_video";

export default function AcessoriosPage() {
  return (
    <div className="relative">
      <Nav />
      <div className="mt-[7.75rem]">
        <Div_Video />
      </div>
    </div>
  );
}
