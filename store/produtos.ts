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
        imagem: "/imgs/produto/produto1.avif",
      },
      {
        nome: "Produto 2",
        precoAntigo: 200,
        precoAtual: 180,
        imagem: "/imgs/produto/produto1.avif",
      },
      {
        nome: "Produto 3",
        precoAntigo: 300,
        precoAtual: 280,
        imagem: "/imgs/produto/produto1.avif",
      },

      {
        nome: "Produto 4",
        precoAntigo: 400,
        precoAtual: 380,
        imagem: "/imgs/produto/produto1.avif",
      },

      {
        nome: "Produto 5",
        precoAntigo: 500,
        precoAtual: 480,
        imagem: "/imgs/produto/produto1.avif",
      },
    ],
  };
};
