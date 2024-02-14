import Produtos from "@/components/produtos";
import Nav from "@/components/ui/nav";

export default function ProdutosPage() {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <Produtos exibeTitulo={false} />
        <Produtos exibeTitulo={false} />
        <Produtos exibeTitulo={false} />
      </div>
    </>
  );
}
