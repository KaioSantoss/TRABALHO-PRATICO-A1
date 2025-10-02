// src/routes/fornecedores.js

// Importa o Express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa o controller de fornecedores
const controller = require('../Controllers/fornecedoresController');

// Importa middleware de validação de campos obrigatórios
const validate = require('../Middlewares/validate');

// Rota para listar todos os fornecedores
router.get('/', controller.listar);

// Rota para buscar um fornecedor pelo ID
router.get('/:id', controller.buscarPorId);

// Rota para criar um novo fornecedor
// Aplica o middleware de validação para os campos 'nome', 'email' e 'telefone'
router.post('/', validate(['nome', 'email', 'telefone']), controller.criar);

// Rota para atualizar um fornecedor existente
router.put('/:id', controller.atualizar);

// Rota para deletar um fornecedor pelo ID
router.delete('/:id', controller.deletar);

// Exporta o roteador para ser usado no arquivo principal (app.js)
module.exports = router;
