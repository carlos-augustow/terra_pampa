import Produtos from "@/components/produtos";
import Nav from "@/components/ui/nav";

export default function ProdutosPage() {
  return (
    <div className="relative">
      <Nav />
      <div className="flex flex-col justify-center items-center mt-[7.75rem]">
        <Produtos exibeTitulo={false} />
        <Produtos exibeTitulo={false} />
        <Produtos exibeTitulo={false} />
      </div>
    </div>
  );
}
