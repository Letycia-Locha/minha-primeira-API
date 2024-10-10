Minha Primeira API
Este projeto é uma API REST simples desenvolvida para fins de aprendizado e prática com as tecnologias de JavaScript, Node.js, Express e MongoDB.

Funcionalidades
A API permite as seguintes operações:

Criar recursos (POST)
Listar recursos (GET)
Atualizar recursos (PUT)
Deletar recursos (DELETE)
Tecnologias Utilizadas
Node.js: Plataforma para execução do código JavaScript no servidor.
Express: Framework para construção de APIs em Node.js.
MongoDB: Banco de dados NoSQL para armazenamento de dados.
Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js - versão 12 ou superior.
MongoDB - versão 4.0 ou superior.
Git - para clonar o repositório.
Além disso, você precisará de um editor de código como o Visual Studio Code.

Instalação
Siga os passos abaixo para rodar o projeto localmente.

1. Clone o repositório

>>git clone https://github.com/Letycia-Locha/minha-primeira-API.git

2. Navegue até o diretório do projeto

>>cd minha-primeira-API

3. Instale as dependências
   
Use o npm para instalar as dependências do projeto:

>>npm install

4. Crie o arquivo .env
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

>>PORT=3000
>>MONGODB_URI=sua-string-de-conexao-mongodb

5. Execute a aplicação
Rode o servidor localmente com o comando:

>>npm start
Ou no modo de desenvolvimento:

>>npm run dev

A API estará disponível em http://localhost:3000.

Rotas

A API oferece as seguintes rotas:

GET /recursos - Retorna todos os recursos.
GET /recursos/:id - Retorna um recurso específico por ID.
POST /recursos - Cria um novo recurso.
PUT /recursos/:id - Atualiza um recurso existente por ID.
DELETE /recursos/:id - Remove um recurso por ID.

Contribuição

Faça um fork do projeto.
Crie um branch para sua feature (git checkout -b minha-feature).
Faça commit das suas alterações (git commit -m 'Minha nova feature').
Faça push para o branch (git push origin minha-feature).
Abra um Pull Request.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
