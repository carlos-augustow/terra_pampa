"use client";

import { createContext, ReactNode, useContext, useState } from "react";
// Types
import { Linguagem } from "@/traducoes/types";
// Linguagem Padrao
import { ptBR } from "@/traducoes/ptBR";

interface AlteraLinguagem {
  palavras: Linguagem;
  alteraLinguagem: (value: Linguagem, idioma: "ptBR" | "es") => void;
  idioma: "ptBR" | "es";
}

const LinguagemContextValues: AlteraLinguagem = {
  palavras: { ...ptBR },
  alteraLinguagem: () => {},
  idioma: "ptBR",
};

const LinguagemContext = createContext<AlteraLinguagem>(LinguagemContextValues);

export const useLinguagemContext = () => {
  return useContext(LinguagemContext);
};

interface Props {
  children: ReactNode;
}

export const LinguagemContextProvider = ({ children }: Props) => {
  const [palavras, setpalavras] = useState<Linguagem>({ ...ptBR });
  const [idioma, setIdioma] = useState<"ptBR" | "es">("ptBR");
  const alteraLinguagem = (value: Linguagem, idioma: "ptBR" | "es") => {
    setpalavras({ ...value });
    setIdioma(idioma);
  };

  const value = { palavras, alteraLinguagem, idioma };
  return (
    <>
      <LinguagemContext.Provider value={value}>{children}</LinguagemContext.Provider>
    </>
  );
};
