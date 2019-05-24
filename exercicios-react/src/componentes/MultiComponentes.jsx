import React from 'react'

export default (props) => 
    <div>
        <h1>{props.message}</h1>
        <p>Using it !!</p>
    </div>

const F2 = (props) => 
    <React.Fragment>
        <h1>{props.message}</h1>
        <p>Using it !!</p>
    </React.Fragment>

const F1 = (props) => [
    <h1>First Option</h1>,
    <p>{props.message}</p>
]

export {F1, F2}


