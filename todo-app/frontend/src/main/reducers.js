import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    todo: () => ({
        description: "Livros",
        list: [
            {
                _id: 1,
                description: 'comprar notbook',
                done: false
            },
            {
                _id: 2,
                description: "ajudar mãe",
                done: true
            },
            {
                _id: 3,
                description: 'estudar inglês',
                done: false
            }
        ]
    })
})

export default rootReducer