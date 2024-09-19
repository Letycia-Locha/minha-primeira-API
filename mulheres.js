const express = require("express"); //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333;//aqui estou criando a rota

//aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Letycia Locha',
        imagem: 'https://github.com/Letycia-Locha/minha-primeira-API/blob/bd5d2614807088399b71bf4a1ebc0d607ae22a57/Letycia.jpg',
        minibio: 'Med vet programadora'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem:'https://github.com/Letycia-Locha/minha-primeira-API/blob/bd5d2614807088399b71bf4a1ebc0d607ae22a57/iana-chan.jpg',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        id: '3',
        nome: 'Nina da Hora',
        imagem: 'https://raw.githubusercontent.com/Letycia-Locha/minha-primeira-API/bd5d2614807088399b71bf4a1ebc0d607ae22a57/nina-da-hora.webp?token=GHSAT0AAAAAACWNLCPLF4PFRG3J47MVGNAAZXIREHQ',
        minibio: 'Hacker Antirracista'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}


//PATCH  -- para alterar um dado informado
function corrigeMulher (request, response) {
    function encontreaMulher (mulher) {
        if (mulher.id === request.params.id) {   //encontrar a mulher correspondente ao ID informado
            return mulher
        } 
    }

    const mulherEncontrada = mulheres.find(encontreaMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }
    response.json(mulheres)
}

//DELETA
function deletaMulher (request, response) {
    function todasMenosela (mulher) {
        if (mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicaram = mulheres.filter (todasMenosela)

    response.json (mulheresQueFicaram)
}

//PORTA
function mostraPorta (){
    console.log("Servidor criado e rodando na porta ", porta)
};


app.use(router.get('/mulheres', mostraMulheres))//configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher))//configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei a rota PATCH 
app.use(router.delete ('/mulheres/:id', deletaMulher)) //configurei a rota DELETA
app.listen (porta, mostraPorta);//servidor ouvindo a portas


