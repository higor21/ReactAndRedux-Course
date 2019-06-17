import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware , createStore } from 'redux'

import promise from 'redux-promise' /* espera retorno de dados do backend, durante 'actions' */
import multi from 'redux-multi' /* habilita retorno de multiplas 'actions' (vetor de algo como {type: ... : payload: ...}) */
import thunk from 'redux-thunk' /* permitiu o carregamentos dos dados (Todos) após a adição de uma Todo */

import App from './main/app'
import reducers from './main/reducers'

// responsável por viabilizar a execução da aba 'Redux' no Firefox/Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

//const store = createStore(reducers, devTools)
// responsável pelo adição de 'middlewares' ao app
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))