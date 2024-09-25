const express = require("express");
const router = express.Router()

const app = express()
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome:"Marisa Monte",
        imagem: 'https://akamai.sscdn.co/uploadfile/letras/fotos/f/7/b/a/f7bae22807ab335f4a21677ef8e5c18f.jpg',
        minibio: 'Cantora e compositora Brasileira',    })
}

function mostraPorta (){
    console.log("Servidor criado e rodando na porta ", porta)
};
app.use(router.get('/mulheres', mostraMulher))
app.listen (porta, mostraPorta );


