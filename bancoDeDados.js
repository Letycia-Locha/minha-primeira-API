const mongoose = require('mongoose');
require('dotenv').config()

async function conectaBancoDeDados () {
   try { console.log('Conexão com o banco de dados iniciou')
 // para que durante a conexão tudo continue funcionando
    
    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conexão com o banco de dados efetivada!')
   } catch (erro) {
    console.log(erro)
   }
}

module.exports = conectaBancoDeDados 