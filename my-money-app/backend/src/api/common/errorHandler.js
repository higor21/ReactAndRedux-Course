/* utilizado para aplicar o método forIn  */
const _ = require('lodash')

module.exports = (req, res, next) => {
    /* objeto contendo a descrição de todos os erros gerados */
    const bundle = res.locals.bundle

    /* se houver erros, aplica o filtro de mensagens de erro*/ 
    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

/* retorna apenas as mensagens de erro */
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors 
}