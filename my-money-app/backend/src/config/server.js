const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

/* aplica algumas 'middlewares' */
server.use(bodyParser.urlencoded({ extended: true }))
/* tratamento de requisições com 'body' do tipo JSON */
server.use(bodyParser.json())
/* permite requisições de diversas fontes */
server.use(allowCors)
/*
    middleware responsável por padronizar como string os parâmetros, 
    os quais serão utilizados por meio do método GET ('skip' e 'limit') para facilitar
    a paginação dos conteúdos no frontend
*/
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server