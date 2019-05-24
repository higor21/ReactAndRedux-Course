import React from 'react'

export default (props) => {
    return <div>
        <p>Informe o pai {props.name_p}!!</p>
        <button onClick={() => props.f_p(`Hello! My name is ${props.name_c}`)}>Click to Informe</button>
    </div>
}