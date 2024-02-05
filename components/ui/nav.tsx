`use client`;

import Image from "next/image";
import { useLinguagemContext } from "@/store/linguagem_context";
import { retornaTiposMenu } from "@/store/menus";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const { palavras } = useLinguagemContext();
  const tiposMenu = retornaTiposMenu(palavras);

  const pathname = usePathname();

  return (
    <nav className="flex w-[100vw] h-[6rem] bg-white justify-between">
      <div className="w-[20%] flex my-[1rem]">
        <Image src="/logo.png" alt="Logo" width={130} height={100} className="ml-[2rem]" />
      </div>
      <div className="text-black mx-auto flex justify-between w-[20rem] items-center">
        {tiposMenu.menuNav.map((item) => (
          <Link href={item.link} key={item.titulo} className={`${pathname === item.link ? "" : ""}`}>
            {item.titulo}
          </Link>
        ))}
      </div>
      <div className="w-[20%]"></div>
    </nav>
  );
};

export default Nav;
