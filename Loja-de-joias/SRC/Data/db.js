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
      nome: "Miguel Costa",
      email: "miguel.costa@example.com",
      telefone: "(31) 98765-4321",
      criadoEm: new Date().toISOString()
    }
  ],

  // Lista de fornecedores iniciais
  fornecedores: [
    {
      id: 1,
      nome: "Joias Premium Ltda",
      email: "contato@joiaspremium.com",
      telefone: "(11) 3456-7890",
      endereco: "Rua das Pedras, 123 - São Paulo/SP",
      criadoEm: new Date().toISOString()
    },
    {
      id: 2,
      nome: "Luxo Importações",
      email: "vendas@luxoimport.com",
      telefone: "(21) 3344-5566",
      endereco: "Av. Central, 456 - Rio de Janeiro/RJ",
      criadoEm: new Date().toISOString()
    }
  ],

  // Lista de pedidos iniciais
  pedidos: [
    {
      id: 1,
      clienteId: 1,
      fornecedorId: 2,
      itens: [
        { produtoId: 1, quantidade: 1, preco: 1500 },
        { produtoId: 2, quantidade: 2, preco: 500 }
      ],
      valorTotal: 2500,
      criadoEm: new Date().toISOString()
    },
    {
      id: 2,
      clienteId: 2,
      fornecedorId: 1,
      itens: [
        { produtoId: 3, quantidade: 1, preco: 5400 }
      ],
      valorTotal: 5400,
      criadoEm: new Date().toISOString()
    },
    {
      id: 3,
      clienteId: 3,
      fornecedorId: 1,
      itens: [
        { produtoId: 2, quantidade: 3, preco: 500 }
      ],
      valorTotal: 1500,
      criadoEm: new Date().toISOString()
    }
  ],

  // Contadores para gerar IDs automáticos
  counters: {
    produtos: 4,      // próximo id será 4
    categorias: 4,    // próximo id será 4
    clientes: 4,      // próximo id será 4
    fornecedores: 3,  // já temos 2
    pedidos: 4        // já temos 3
  }
};
