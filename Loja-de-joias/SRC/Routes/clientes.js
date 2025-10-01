// src/routes/clientes.js

// Importa o Express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa o controller de clientes
const controller = require('../Controllers/clientesController');

// Importa middleware de validação de campos obrigatórios
const validate = require('../Middlewares/validate');

// Rota para listar todos os clientes
router.get('/', controller.listar);

// Rota para buscar um cliente pelo ID
router.get('/:id', controller.buscarPorId);

// Rota para criar um novo cliente
// Aplica o middleware de validação para os campos 'nome', 'email' e 'telefone'
router.post('/', validate(['nome', 'email', 'telefone']), controller.criar);

// Rota para atualizar um cliente existente
router.put('/:id', controller.atualizar);

// Rota para deletar um cliente pelo ID
router.delete('/:id', controller.deletar);

// Exporta o roteador para ser usado no arquivo principal (app.js)
module.exports = router;
