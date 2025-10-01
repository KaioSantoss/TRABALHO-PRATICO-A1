// src/controllers/categoriasController.js

// Importa o "banco de dados" em memória
const db = require('../Data/db');

// Listar todas as categorias
exports.listar = (req, res) => {
  res.json(db.categorias);
};

// Buscar uma categoria pelo ID
exports.buscarPorId = (req, res) => {
  const categoria = db.categorias.find(c => c.id === parseInt(req.params.id));

  if (!categoria) return res.status(404).json({ erro: 'Categoria não encontrada' });

  res.json(categoria);
};

// Criar uma nova categoria
exports.criar = (req, res) => {
  const { nome, descricao, nivel } = req.body;

  const nova = { 
    id: db.counters.categorias++, 
    nome, 
    descricao, 
    nivel, 
    criadoEm: new Date().toISOString() 
  };

  db.categorias.push(nova);

  res.status(201).json(nova);
};

// Atualizar uma categoria existente
exports.atualizar = (req, res) => {
  const categoria = db.categorias.find(c => c.id === parseInt(req.params.id));

  if (!categoria) return res.status(404).json({ erro: 'Categoria não encontrada' });

  const { nome, descricao, nivel } = req.body;

  if (nome !== undefined) categoria.nome = nome;
  if (descricao !== undefined) categoria.descricao = descricao;
  if (nivel !== undefined) categoria.nivel = nivel;

  res.json(categoria);
};

// Deletar uma categoria
exports.deletar = (req, res) => {
  const index = db.categorias.findIndex(c => c.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ erro: 'Categoria não encontrada' });

  db.categorias.splice(index, 1);

  res.json({ mensagem: 'Categoria deletada com sucesso' });
};
