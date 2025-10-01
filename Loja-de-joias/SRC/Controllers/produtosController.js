// Importa o "banco de dados" em memória
const db = require('../Data/db');

// Listar todos os produtos
exports.listar = (req, res) => {
  // Retorna todos os produtos como JSON
  res.json(db.produtos);
};

// Buscar um produto pelo ID
exports.buscarPorId = (req, res) => {
  // Converte o ID da rota para inteiro e busca o produto
  const produto = db.produtos.find(p => p.id === parseInt(req.params.id));

  // Se não encontrar, retorna 404
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

  // Retorna o produto encontrado
  res.json(produto);
};

// Criar um novo produto
exports.criar = (req, res) => {
  const { nome, preco, estoque } = req.body;

  // Cria um novo objeto produto com ID automático
  const novo = { id: db.counters.produtos++, nome, preco, estoque };

  // Adiciona ao "banco de dados"
  db.produtos.push(novo);

  // Retorna o produto criado com status 201 (Created)
  res.status(201).json(novo);
};

// Atualizar um produto existente
exports.atualizar = (req, res) => {
  const produto = db.produtos.find(p => p.id === parseInt(req.params.id));

  // Se não encontrar, retorna 404
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

  const { nome, preco, estoque } = req.body;

  // Atualiza apenas os campos fornecidos
  if (nome !== undefined) produto.nome = nome;
  if (preco !== undefined) produto.preco = preco;
  if (estoque !== undefined) produto.estoque = estoque;

  // Retorna o produto atualizado
  res.json(produto);
};

// Deletar um produto
exports.deletar = (req, res) => {
  const index = db.produtos.findIndex(p => p.id === parseInt(req.params.id));

  // Se não encontrar, retorna 404
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  // Remove o produto do array
  db.produtos.splice(index, 1);

  // Retorna mensagem de sucesso
  res.json({ mensagem: 'Produto deletado com sucesso' });
};
