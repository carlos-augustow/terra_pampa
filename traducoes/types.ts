export interface Linguagem {
  header: {
    quemSomos: string;
    Produtos: string;
    Home: string;
    Acessorios: string;
  };

  faixaVouncherDesconto: {
    ganhe: string;
    resto: string;
    copiar: string;
  };

  beneficios: {
    fidelidade: {
      titulo: string;
      descricao: string;
    };

    frete: {
      titulo: string;
      descricao: string;
    };
    couro: {
      titulo: string;
      descricao: string;
    };

    pix: {
      titulo: string;
      descricao: string;
    };
  };
}
