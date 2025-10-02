API Loja Virtual

Descrição:
API REST construída com Node.js e Express para gerenciar produtos, clientes, categorias, pedidos e fornecedores. Os dados são armazenados em memória (arrays), permitindo realizar operações CRUD completas.

Instalação e Execução

Clonar o repositório:

git clone https://github.com/KaioSantoss/TRABALHO-PRATICO-A1.git
cd Loja-de-joias


Instalar dependências:

npm install

Executar o servidor:

npm start
O servidor rodará por padrão na porta 3000.

Endpoints
1. Produtos
Método	Rota	Descrição
GET	/produtos	Retorna todos os produtos
GET	/produtos/:id	Retorna produto pelo ID
POST	/produtos	Cria um novo produto
PUT	/produtos/:id	Atualiza produto pelo ID
DELETE	/produtos/:id	Deleta produto pelo ID

Exemplo POST /produtos

{
  "nome": "Anel de Ouro",
  "preco": 1500
}


Exemplo resposta 201 Created

{
  "id": 1,
  "nome": "Anel de Ouro",
  "preco": 1500
}

2. Clientes
Método	Rota	Descrição
GET	/clientes	Retorna todos os clientes
GET	/clientes/:id	Retorna cliente pelo ID
POST	/clientes	Cria um novo cliente
PUT	/clientes/:id	Atualiza cliente pelo ID
DELETE	/clientes/:id	Deleta cliente pelo ID

Exemplo POST /clientes

{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}


Exemplo resposta 201 Created

{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com"
}

3. Categorias
Método	Rota	Descrição
GET	/categorias	Retorna todas as categorias
GET	/categorias/:id	Retorna categoria pelo ID
POST	/categorias	Cria nova categoria
PUT	/categorias/:id	Atualiza categoria pelo ID
DELETE	/categorias/:id	Deleta categoria pelo ID

Exemplo POST /categorias

{
  "nome": "Acessórios",
  "descricao": "Anéis, colares e pulseiras"
}


Exemplo resposta 201 Created

{
  "id": 1,
  "nome": "Acessórios",
  "descricao": "Anéis, colares e pulseiras"
}

4. Pedidos
Método	Rota	Descrição
GET	/pedidos	Retorna todos pedidos
GET	/pedidos/:id	Retorna pedido pelo ID
POST	/pedidos	Cria um novo pedido
PUT	/pedidos/:id	Atualiza pedido pelo ID
DELETE	/pedidos/:id	Deleta pedido pelo ID

Exemplo POST /pedidos

{
  "idCliente": 1,
  "produtos": [1,2],
  "total": 3500
}


Exemplo resposta 201 Created

{
  "id": 1,
  "idCliente": 1,
  "produtos": [1,2],
  "total": 3500
}

5. Fornecedores
Método	Rota	Descrição
GET	/fornecedores	Retorna todos fornecedores
GET	/fornecedores/:id	Retorna fornecedor pelo ID
POST	/fornecedores	Cria novo fornecedor
PUT	/fornecedores/:id	Atualiza fornecedor pelo ID
DELETE	/fornecedores/:id	Deleta fornecedor pelo ID

Exemplo POST /fornecedores

{
  "nome": "Joias Ltda",
  "contato": "joias@email.com"
}


Exemplo resposta 201 Created

{
  "id": 1,
  "nome": "Joias Ltda",
  "contato": "joias@email.com"
}

Equipe
Nome	GitHub	Contribuição

Jamylle Cesario	github.com/jamyllecesario	Implementação CRUD Categorias, CRUD clientes e README

Kaio Daniel	github.com/KaioSantoss	Configuração Inicial, CRUD Produtos e Validação básica de campos obrigatórios (ex: retornar 400 Bad Request se campo obrigatório estiver faltando).

Pedro Francisco	github.com/Pedrin453	Implementação CRUD Pedidos, CRUD Fornecedores e POSTMAN
