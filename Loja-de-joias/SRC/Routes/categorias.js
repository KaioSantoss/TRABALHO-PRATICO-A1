// src/routes/categorias.js

// Importa o Express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa o controller de categorias
const controller = require('../Controllers/categoriasController');

// Importa middleware de validação de campos obrigatórios
const validate = require('../Middlewares/validate');

// Rota para listar todas as categorias
router.get('/', controller.listar);

// Rota para buscar uma categoria pelo ID
router.get('/:id', controller.buscarPorId);

// Rota para criar uma nova categoria
// Aplica o middleware de validação para os campos 'nome' e 'nivel'
router.post('/', validate(['nome', 'nivel']), controller.criar);

// Rota para atualizar uma categoria existente
router.put('/:id', controller.atualizar);

// Rota para deletar uma categoria pelo ID
router.delete('/:id', controller.deletar);

// Exporta o roteador para ser usado no arquivo principal (app.js)
module.exports = router;
