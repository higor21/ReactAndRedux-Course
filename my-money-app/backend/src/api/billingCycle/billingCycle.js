
/*
    'node-restful' é uma framework que simplifica a criação do CRUD
    e auxilia na integração entre banco de dados e definição de rotas
*/
const restful = require('node-restful')

/* modelagem do banco com o uso do 'node-restful' */
const mongoose = restful.mongoose

/*
    Os dois esquemas abaixo, além de criarem o modelo de banco de dados,
    também aplica as validações aos mesmos
*/
const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

/* esquema principal */
const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)