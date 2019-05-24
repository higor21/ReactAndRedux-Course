import React from 'react'
//import ReactDOM from 'react-dom'

const Parent = (props) => {
    let information = null

    let f = (info) => {
        document.getElementById('content').textContent = `Information from child: ${info}`
    }

    return <div>
                {React.cloneElement(props.children, {name_p: props.name_p, f_p: f})}
                <hr/>
                <h2>{props.title}</h2>
                <p id="content">Information from child: {information}</p>
            </div>
}

export {Parent}