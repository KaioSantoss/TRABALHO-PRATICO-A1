// src/controllers/fornecedoresController.js

// Importa o "banco de dados" em memória
const db = require('../Data/db');

// Listar todos os fornecedores
exports.listar = (req, res) => {
  res.json(db.fornecedores);
};

// Buscar um fornecedor pelo ID
exports.buscarPorId = (req, res) => {
  const fornecedor = db.fornecedores.find(f => f.id === parseInt(req.params.id));

  if (!fornecedor) return res.status(404).json({ erro: 'Fornecedor não encontrado' });

  res.json(fornecedor);
};

// Criar um novo fornecedor
exports.criar = (req, res) => {
  const { nome, email, telefone, endereco } = req.body;

  const novo = { 
    id: db.counters.fornecedores++, 
    nome, 
    email, 
    telefone, 
    endereco, 
    criadoEm: new Date().toISOString() 
  };

  db.fornecedores.push(novo);

  res.status(201).json(novo);
};

// Atualizar um fornecedor existente
exports.atualizar = (req, res) => {
  const fornecedor = db.fornecedores.find(f => f.id === parseInt(req.params.id));

  if (!fornecedor) return res.status(404).json({ erro: 'Fornecedor não encontrado' });

  const { nome, email, telefone, endereco } = req.body;

  if (nome !== undefined) fornecedor.nome = nome;
  if (email !== undefined) fornecedor.email = email;
  if (telefone !== undefined) fornecedor.telefone = telefone;
  if (endereco !== undefined) fornecedor.endereco = endereco;

  res.json(fornecedor);
};

// Deletar um fornecedor
exports.deletar = (req, res) => {
  const index = db.fornecedores.findIndex(f => f.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ erro: 'Fornecedor não encontrado' });

  db.fornecedores.splice(index, 1);

  res.json({ mensagem: 'Fornecedor deletado com sucesso' });
};
