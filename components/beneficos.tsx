import { useLinguagemContext } from "@/store/linguagem_context";

const Beneficios = () => {
  const { palavras } = useLinguagemContext();

  const botaoCopiar = async () => {
    try {
      await navigator.clipboard.writeText("voucher");
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className="bg-black py-8 w-full flex gap-4 items-center justify-center">
        <p className="text-white text-center">
          <span className="text-[#bb29bb]">{palavras.faixaVouncherDesconto.ganhe}</span> {palavras.faixaVouncherDesconto.resto}
        </p>
        <div className="border border-[#bb29bb] flex justify-between w-[10rem] rounded-2xl">
          <span className="text-[#bb29bb] text-center w-[50%]">vouncher</span>

          <button className="text-white w-[50%] rounded-r-2xl bg-[#bb29bb]" onClick={botaoCopiar}>
            {palavras.faixaVouncherDesconto.copiar}
          </button>
        </div>
      </div>

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
    </>
  );
};
export default Beneficios;
