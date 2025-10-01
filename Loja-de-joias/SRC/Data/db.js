module.exports = {
  // Lista de produtos iniciais
  produtos: [
    {
      id: 1,
      nome: "Anel de Ouro",
      preco: 1500,
      estoque: 5
    },
    {
      id: 2,
      nome: "Colar de Prata",
      preco: 500,
      estoque: 7
    },
    {
      id: 3,
      nome: "Pulseira de Diamante",
      preco: 5400,
      estoque: 7
    }
  ],

  // Lista de categorias iniciais
  categorias: [
    {
      id: 1,
      nome: "Anéis",
      descricao: "Coleção de anéis de luxo",
      nivel: "Premium",
      criadoEm: new Date().toISOString()
    },
    {
      id: 2,
      nome: "Colares",
      descricao: "Colares sofisticados em ouro e prata",
      nivel: "Standard",
      criadoEm: new Date().toISOString()
    },
    {
      id: 3,
      nome: "Pulseiras",
      descricao: "Pulseiras finas com pedras preciosas",
      nivel: "Premium",
      criadoEm: new Date().toISOString()
    }
  ],

  // Lista de clientes iniciais
  clientes: [
    {
      id: 1,
      nome: "Jullyane Silva",
      email: "juju.silva@example.com",
      telefone: "(11) 91234-5678",
      criadoEm: new Date().toISOString()
    },
    {
      id: 2,
      nome: "Natalia Santos",
      email: "natalia.santos@example.com",
      telefone: "(21) 99876-5432",
      criadoEm: new Date().toISOString()
    },
    {
      id: 3,
      nome: "Miguel costa",
      email: "miguel.costa@example.com",
      telefone: "(31) 98765-4321",
      criadoEm: new Date().toISOString()
    }
  ],

  // Listas vazias para pedidos e fornecedores
  pedidos: [],
  fornecedores: [],

  // Contadores para gerar IDs automáticos
  counters: {
    produtos: 4,      // próximo id será 4
    categorias: 4,    // próximo id será 4
    clientes: 4,      // próximo id será 4
    pedidos: 1,
    fornecedores: 1
  }
};
