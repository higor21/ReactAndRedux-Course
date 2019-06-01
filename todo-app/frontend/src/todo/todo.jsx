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
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh = this.refresh.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=${description}` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then((res) => {
            console.log(res.data)
            this.setState({...this.state, description, list: res.data})}
        )
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    onChange(e) {        
        this.setState({...this.state.description, description: e.target.value})
    }

    handleRemove(td){
        axios.delete(`${URL}/${td._id}`).then(res => {
            this.refresh()
        })
    }

    handleMarkAsDone(td){
        axios.put(`${URL}/${td._id}`, {...td, done: true}).then(res => {
            this.refresh(this.state.description)
        })
    }

    handleMarkAsPending(td){
        axios.put(`${URL}/${td._id}`, {...td, done: false}).then(res => {
            this.refresh(this.state.description)
        })
    }

    handleAdd () {
        axios.post(URL, {description: this.state.description})
            .then(res => this.refresh())
    }

    handleClear() {
        this.refresh()
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <hr/>
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    onChange={this.onChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleMarkAsPending = {this.handleMarkAsPending}
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}