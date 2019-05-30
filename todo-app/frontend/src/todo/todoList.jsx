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
                    <td>{incrementId()}</td>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.handleRemove(todo)}
                        />
                    </td>
                </tr>
            ))
    }

    return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {handleRows()}
                </tbody>
            </table>
    )
}