import { useEffect } from "react";
// CONTEXT
import { useLinguagemContext } from "@/store/linguagem_context";
// LINGUAGENS
import { es } from "./es";
import { ptBR } from "./ptBR";

const DefineLinguagem = () => {
  const { alteraLinguagem } = useLinguagemContext();

  useEffect(() => {
    const linguagem = navigator.language;

    if (linguagem.includes("es")) {
      alteraLinguagem({ ...es }, "es");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
};

export default DefineLinguagem;
