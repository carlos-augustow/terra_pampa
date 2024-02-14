import { Linguagem } from "@/traducoes/types";

export interface MenuItem {
  icone: string;
  link: string;
  exibir: boolean;
  titulo: string;
  mensagem: string | null;
  iconWidth?: number;
  iconHeight?: number;
}

export interface TiposMenu {
  menuNav: MenuItem[];
}

export const retornaTiposMenu = (linguagem: Linguagem): TiposMenu => {
  return {
    menuNav: [
      {
        icone: "",
        link: "/",
        exibir: true,
        titulo: linguagem.header.Home,
        mensagem: null,
      },
      {
        icone: "",
        link: "/quem_somos",
        exibir: true,
        titulo: linguagem.header.quemSomos,
        mensagem: null,
      },
      {
        icone: "",
        link: "/produtos",
        exibir: true,
        titulo: linguagem.header.Produtos,
        mensagem: null,
      },
      {
        icone: "",
        link: "/acessorios",
        exibir: true,
        titulo: linguagem.header.Acessorios,
        mensagem: null,
      },
    ],
  };
};
