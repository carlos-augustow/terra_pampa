import { useLinguagemContext } from "@/store/linguagem_context";

const Beneficios = () => {
  const { palavras } = useLinguagemContext();

  return (
    <section className="flex justify-around flex-row  py-4 text-black bg-white">
      <div className="flex flex-col w-[20%] items-center justify-center gap-4">
        <h4>{palavras.beneficios.fidelidade.titulo}</h4>
        <p className="text-center">{palavras.beneficios.fidelidade.descricao}</p>
      </div>

      <div className="flex flex-col w-[20%] items-center justify-center gap-4">
        <h4>{palavras.beneficios.frete.titulo}</h4>
        <p className="text-center">{palavras.beneficios.frete.descricao}</p>
      </div>

      <div className="flex flex-col w-[20%] items-center justify-center gap-4">
        <h4>{palavras.beneficios.couro.titulo}</h4>
        <p className="text-center">{palavras.beneficios.couro.descricao}</p>
      </div>

      <div className="flex flex-col w-[20%] items-center justify-center gap-4">
        <h4>{palavras.beneficios.pix.titulo}</h4>
        <p className="text-center">{palavras.beneficios.pix.descricao}</p>
      </div>
    </section>
  );
};
export default Beneficios;
