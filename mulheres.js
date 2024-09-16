const express = require("express"); //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota

const app = express() //aqui estou iniciando o app
const porta = 3333;//aqui estou criando a rota

//aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Letycia Locha',
        imagem: '',
        minibio: 'Med vet programadora'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem:'',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        id: '3',
        nome: 'Nina da Hora',
        imagem: '',
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
        id: '',
        nome: '',
        imagem '',
        minibio:''
    }
}

//PORTA
function mostraPorta (){
    console.log("Servidor criado e rodando na porta ", porta)
};


app.use(router.get('/mulheres', mostraMulheres))//configurei rota GET /mulheres
app.listen (porta, mostraPorta);//servidor ouvindo a porta