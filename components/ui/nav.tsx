"use client";

import Image from "next/image";
import { useLinguagemContext } from "@/store/linguagem_context";
import { retornaTiposMenu } from "@/store/menus";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const { palavras } = useLinguagemContext();

  const tiposMenu = retornaTiposMenu(palavras);

  const pathname = usePathname();

  return (
    <div className="fixed top-0 z-10">
      <aside className="text-white bg-black p-1">
        <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </aside>
      <nav className="flex w-[100vw] h-[6rem] bg-white justify-between font-semibold">
        <div className="w-[20%] flex my-[1rem]">
          <Image src="/logo.png" alt="Logo" width={130} height={100} className="ml-[2rem]" />
        </div>
        <div className="text-black mx-auto flex justify-between w-[25rem] items-center">
          {tiposMenu.menuNav.map((item) => (
            <Link href={item.link} key={item.titulo} className={`hover:text-[#bb29bb] uppercase ${pathname === item.link ? " text-[#bb29bb] " : ""}`}>
              {item.titulo}
            </Link>
          ))}
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <div className="flex h-10">
            <input type="text" className="p-2 border-solid border border-b-black outline-none" />
            <div className="flex gap-2 ml-2">
              <Image src="/icons/search.svg" height={20} width={20} alt="lupa" />
              <Image src="/icons/user.svg" height={10} width={15} alt="usuario" />
              <Image src="/icons/cart.svg" height={20} width={20} alt="carrinho" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
