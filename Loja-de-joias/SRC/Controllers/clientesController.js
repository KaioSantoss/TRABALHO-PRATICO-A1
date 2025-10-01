// src/controllers/clientesController.js

// Importa o "banco de dados" em memória
const db = require('../Data/db');

// Listar todos os clientes
exports.listar = (req, res) => {
  res.json(db.clientes);
};

// Buscar um cliente pelo ID
exports.buscarPorId = (req, res) => {
  const cliente = db.clientes.find(c => c.id === parseInt(req.params.id));

  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

  res.json(cliente);
};

// Criar um novo cliente
exports.criar = (req, res) => {
  const { nome, email, telefone, endereco } = req.body;

  const novo = { 
    id: db.counters.clientes++, 
    nome, 
    email, 
    telefone, 
    endereco, 
    criadoEm: new Date().toISOString() 
  };

  db.clientes.push(novo);

  res.status(201).json(novo);
};

// Atualizar um cliente existente
exports.atualizar = (req, res) => {
  const cliente = db.clientes.find(c => c.id === parseInt(req.params.id));

  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

  const { nome, email, telefone, endereco } = req.body;

  if (nome !== undefined) cliente.nome = nome;
  if (email !== undefined) cliente.email = email;
  if (telefone !== undefined) cliente.telefone = telefone;
  if (endereco !== undefined) cliente.endereco = endereco;

  res.json(cliente);
};

// Deletar um cliente
exports.deletar = (req, res) => {
  const index = db.clientes.findIndex(c => c.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ erro: 'Cliente não encontrado' });

  db.clientes.splice(index, 1);

  res.json({ mensagem: 'Cliente deletado com sucesso' });
};
