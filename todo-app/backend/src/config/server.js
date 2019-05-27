const port = 3000

const bodyParser = require('body-parser')
const express = require('express')

const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.get('/', (req, res) => {
    res.send('<h1>olá</h1>')
})

server.listen(port, () => { console.log(`BACKEND is running on port ${port}`) })

module.exports = server