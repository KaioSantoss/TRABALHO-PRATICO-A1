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

  // Listas vazias para clientes, pedidos, categorias e fornecedores
  clientes: [],
  pedidos: [],
  categorias: [],
  fornecedores: [],

  // Contadores para gerar IDs automáticos
  counters: {
    produtos: 4,     // próximo id será 4
    clientes: 1,
    pedidos: 1,
    categorias: 4,
    fornecedores: 4
  }
};
