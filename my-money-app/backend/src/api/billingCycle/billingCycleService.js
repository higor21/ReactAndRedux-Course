/* requisita os modelos de bancos definidos anteriormente */
const BillingCycle = require('./billingCycle')

/*
    importação da 'middleware' que faz o tratamento de erros:
    nela as mensagens de erro viram um vetor de 'strings' de modo
    a facilitar a visualização delo cliente
*/
const errorHandler = require('../common/errorHandler')

/* automatiza a criação do CRUD */
BillingCycle.methods(['get', 'post', 'put', 'delete'])

/*
    aplica a 'middleware' que atualiza o método PUT:
    * "new: true" : especifica que o método PUT deve retornar o valor atualizado como JSON
    * "runValidators: true" : aplica as validações também ao método PUT, além do método POST
*/
BillingCycle.updateOptions({new: true, runValidators: true})

/* aplica a 'middleware' de tratamento de erro após a chamada dos métodos PUT e POST */
BillingCycle.after('post', errorHandler).after('put', errorHandler)

/* define uma nova rota ('count') que retorna a quantidade de registros de BillingCycle no banco */
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

/*
    define uma nova rota ('sumary') que retorna, por meio do 'pipeline' de agregação,
    um novo objeto contendo a soma de todos os débitos e créditos, relacionados a todos 
    os registros contidos no banco.

    $project: serve para fazer um filtro em um objeto ou até mesmo criar um novo objeto, 
        o qual pode utilizar expreções matemáticas para isso.
    $group: agrupa os dados, podendo também utilizar expressões matemáticas para isso.
*/
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        /*
            soma todos os cŕeditos e débitos de um único registro BillingCycle, 
            associando os mesmos aos atributos 'credit' e 'debt', respectivamente
        */
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        /*
            agrupa todos os créditos calculados anteriormente pelo $project,
            somando-os em apenas um (credit), bem como os débitos
        */
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        /* deixa passar como resposta apenas os atributos 'credit' e 'debt' */
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle