// src/routes/pedidos.js

// Importa o Express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa o controller de pedidos
const controller = require('../Controllers/pedidosController');

// Importa middleware de validação de campos obrigatórios
const validate = require('../Middlewares/validate');

// Rota para listar todos os pedidos
router.get('/', controller.listar);

// Rota para buscar um pedido pelo ID
router.get('/:id', controller.buscarPorId);

// Rota para criar um novo pedido
// Aplica o middleware de validação para os campos obrigatórios
router.post('/', validate(['clienteId', 'fornecedorId', 'itens', 'valorTotal']), controller.criar);

// Rota para atualizar um pedido existente
router.put('/:id', controller.atualizar);

// Rota para deletar um pedido pelo ID
router.delete('/:id', controller.deletar);

// Exporta o roteador para ser usado no arquivo principal (app.js)
module.exports = router;
