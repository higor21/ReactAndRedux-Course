const Todo = require('./todo')


Todo.methods(['get','post','put','delete'])

/*
Ao implementar os métodos CRUD, o 'node-restful' não utiliza validação no método PUT
e sempre retorna o resultado do objeto desatualizado. Desse modo,
    * new: permite que a API rest-ful criada pelo node-restful
     sempre retorne os dados atualizados
    * runValidatiors: valida os dados antes da inserção no caso do PUT
*/
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo