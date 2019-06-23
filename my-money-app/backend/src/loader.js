/* arquivo principal, o qual importa todos os outros da aplicação */

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)