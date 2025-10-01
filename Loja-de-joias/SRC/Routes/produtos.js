// Importa o Express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa o controller de produtos
const controller = require('../Controllers/produtosController');

// Importa middleware de validação de campos obrigatórios
const validate = require('../Middlewares/validate');

// Rota para listar todos os produtos
router.get('/', controller.listar);

// Rota para buscar um produto pelo ID
router.get('/:id', controller.buscarPorId);

// Rota para criar um novo produto
// Aplica o middleware de validação para os campos 'nome', 'preco' e 'estoque'
router.post('/', validate(['nome', 'preco', 'estoque']), controller.criar);

// Rota para atualizar um produto existente
router.put('/:id', controller.atualizar);

// Rota para deletar um produto pelo ID
router.delete('/:id', controller.deletar);

// Exporta o roteador para ser usado no arquivo principal (index.js ou app.js)
module.exports = router;
