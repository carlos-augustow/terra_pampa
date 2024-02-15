interface produto {
  nome: string;
  precoAntigo: number;
  precoAtual: number;
  imagem: string;
}

export interface produtos {
  produtos: produto[];
}

export const retornaProdutos = (): produtos => {
  return {
    produtos: [
      {
        nome: "Produto 1",
        precoAntigo: 100,
        precoAtual: 80,
        imagem: "/imgs/produto/p1.png",
      },
      {
        nome: "Produto 2",
        precoAntigo: 200,
        precoAtual: 180,
        imagem: "/imgs/produto/p2.png",
      },
      {
        nome: "Produto 3",
        precoAntigo: 300,
        precoAtual: 280,
        imagem: "/imgs/produto/p3.png",
      },
      {
        nome: "Produto 4",
        precoAntigo: 340,
        precoAtual: 290,
        imagem: "/imgs/produto/p3.png",
      },
    ],
  };
};
