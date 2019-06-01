import React from 'react'
import IconButton from '../template/iconButton';


// toda vida q tu for retornar algo sem a função 'return' não coloque 
// a merda de chaves ({}), sempre com parêntes seu MERDA!!!

export default props => {    

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
                            onClick={() => props.handleMarkAsDone(todo)}
                        />
                        <IconButton 
                            hide = {!todo.done}
                            style='warning'
                            icon='undo'
                            onClick={() => props.handleMarkAsPending(todo)}
                        />
                        <IconButton
                            hide = {!todo.done}
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.handleRemove(todo)}
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