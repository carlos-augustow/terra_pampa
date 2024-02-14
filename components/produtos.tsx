import { retornaProdutos } from "@/store/produtos";
import Image from "next/image";

interface Produto {
  exibeTitulo: boolean;
}

const Produtos = (props: Produto) => {
  const produtos = retornaProdutos().produtos;

  return (
    <section className="mt-4 w-[62.5%] flex justify-center flex-col">
      {props.exibeTitulo && <h2>Produtos em destaque</h2>}
      <div className="flex gap-10 flex-row py-4 text-black self-center bg-white">
        {produtos.map((produto) => (
          <div className="flex flex-col justify-center gap-4" key={produto.nome}>
            <Image src={produto.imagem} width={230} height={230} alt={produto.nome} />
            <p className="font-semibold">{produto.nome}</p>
            <p className="line-through">{produto.precoAntigo}</p>
            <p>{produto.precoAtual} no pix 10% off</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produtos;
