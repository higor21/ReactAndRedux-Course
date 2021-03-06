const mongoose = require('mongoose')

/*
    redefine o atributo Promise do mongoose, visto que o mesmo 
    encontra-se depreciado
*/
mongoose.Promise = global.Promise
module.exports =  mongoose.connect('mongodb://localhost/mymoney').then(
    ()=> console.log('connected to db')
).catch(
    (err)=> console.error(err)
);


/* redefine as mensagens de erro para Português */
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."