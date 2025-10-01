// Importa o Express e cria a aplicação
const express = require('express');
const app = express();

// Define a porta do servidor (usa variável de ambiente ou 3000 por padrão)
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON nas requisições
app.use(express.json());

// Importa e registra as rotas de produtos
const produtosRoutes = require('./SRC/Routes/produtos');
app.use('/api/v1/produtos', produtosRoutes);

// Importa e registra as rotas de categorias
const categoriasRoutes = require('./SRC/Routes/categorias');
app.use('/api/v1/categorias', categoriasRoutes);

// Importa e registra as rotas de clientes
const clientesRoutes = require('./SRC/Routes/clientes');
app.use('/api/v1/clientes', clientesRoutes);

// Rota raiz apenas para teste se a API está funcionando
app.get('/', (req, res) => res.send('API Loja de Joias Funcionando!'));

// Middleware para tratamento de erros
const errorHandler = require('./SRC/Middlewares/errorHandler');
app.use(errorHandler);

// Inicializa o servidor e exibe mensagem no console
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
