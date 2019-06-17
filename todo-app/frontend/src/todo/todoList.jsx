import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IconButton from '../template/iconButton';
import { markAsDone, markAsPending, remove } from './todoActions'

// toda vida q tu for retornar algo sem a função 'return' não coloque 
// a merda de chaves ({}), sempre com parêntes seu MERDA!!!

const TodoList = props => {    

    let i = 0;

    const incrementId = () => {
        return ++i;
    }

    const handleRows = () => {
        //console.log(props.list)
        const list = props.list || []
        return list.map(todo => (
                <tr key={todo._id} >
                    <td className="id_of_desc"> {incrementId()} </td>
                    <td className={todo.done ? 'disabled' : ''} >{todo.description}</td>
                    <td className="space_blocks btns_icons">
                        <IconButton
                            hide = {todo.done}
                            style='success'
                            icon='check'
                            onClick={() => props.markAsDone(todo)}
                        />
                        <IconButton 
                            hide = {!todo.done}
                            style='warning'
                            icon='undo'
                            onClick={() => props.markAsPending(todo)}
                        />
                        <IconButton
                            hide = {!todo.done}
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.remove(todo)}
                        />
                    </td>
                </tr>
            ))
    }

    return (
            <table className='table table_space'>
                <thead>
                    <tr>
                        <th className="id_of_desc">Id</th>
                        <th>Description</th>
                        <th className="btns_icons">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {handleRows()}
                </tbody>
            </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch =>
    bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)