import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {


    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.onChange = this.onChange.bind(this)
        this.handleApp = this.handleApp.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh = this.refresh.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`).then((res) => {
            console.log(res.data)
            this.setState({...this.state, description: '', list: res.data})}
        )
    }

    onChange(e) {        
        this.setState({...this.state.description, description: e.target.value})
    }

    handleRemove(td){
        axios.delete(`${URL}/${td._id}`).then(res => {
            this.refresh()
        })
    }

    handleApp () {
        axios.post(URL, {description: this.state.description})
            .then(res => this.refresh())
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <hr/>
                <TodoForm
                    description={this.state.description}
                    handleApp={this.handleApp}
                    onChange={this.onChange}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}