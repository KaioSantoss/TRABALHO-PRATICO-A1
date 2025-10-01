// Middleware para tratamento de erros no Express
function errorHandler(err, req, res, next) {
  // Exibe o stack trace do erro no console para depuração
  console.error(err.stack);

  // Retorna uma resposta com status 500 e mensagem genérica para o cliente
  res.status(500).json({ erro: 'Ocorreu um erro no servidor' });
}

// Exporta o middleware para ser usado em outras partes da aplicação
module.exports = errorHandler;
