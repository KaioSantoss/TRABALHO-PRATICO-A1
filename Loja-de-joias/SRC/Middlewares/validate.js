// Middleware para validar campos obrigatórios em requisições HTTP
function validateFields(requiredFields) {
  // Retorna uma função middleware do Express
  return (req, res, next) => {
    // Filtra os campos que estão faltando no corpo da requisição
    const missing = requiredFields.filter(field => req.body[field] == null);

    // Se houver campos faltando, retorna erro 400 com mensagem
    if (missing.length) {
      return res.status(400).json({ 
        erro: `Campos obrigatórios faltando: ${missing.join(', ')}` 
      });
    }

    // Se todos os campos obrigatórios estiverem presentes, chama o próximo middleware
    next();
  };
}

// Exporta a função para ser usada em outras partes da aplicação
module.exports = validateFields;
