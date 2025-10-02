// src/controllers/pedidosController.js

// Importa o "banco de dados" em memória
const db = require('../Data/db');

// Listar todos os pedidos
exports.listar = (req, res) => {
  res.json(db.pedidos);
};

// Buscar um pedido pelo ID
exports.buscarPorId = (req, res) => {
  const pedido = db.pedidos.find(p => p.id === parseInt(req.params.id));

  if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });

  res.json(pedido);
};

// Criar um novo pedido
exports.criar = (req, res) => {
  const { clienteId, fornecedorId, itens, valorTotal } = req.body;

  const novo = {
    id: db.counters.pedidos++,
    clienteId,
    fornecedorId,
    itens,         // array de objetos: [{ produtoId, quantidade, preco }]
    valorTotal,
    criadoEm: new Date().toISOString()
  };

  db.pedidos.push(novo);

  res.status(201).json(novo);
};

// Atualizar um pedido existente
exports.atualizar = (req, res) => {
  const pedido = db.pedidos.find(p => p.id === parseInt(req.params.id));

  if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });

  const { clienteId, fornecedorId, itens, valorTotal } = req.body;

  if (clienteId !== undefined) pedido.clienteId = clienteId;
  if (fornecedorId !== undefined) pedido.fornecedorId = fornecedorId;
  if (itens !== undefined) pedido.itens = itens;
  if (valorTotal !== undefined) pedido.valorTotal = valorTotal;

  res.json(pedido);
};

// Deletar um pedido
exports.deletar = (req, res) => {
  const index = db.pedidos.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ erro: 'Pedido não encontrado' });

  db.pedidos.splice(index, 1);

  res.json({ mensagem: 'Pedido deletado com sucesso' });
};
