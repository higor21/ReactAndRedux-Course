import React from 'react'

export default class ComponentClass extends React.Component{
    render(){
        return <h1>{this.props.value || 'Pattern Value'}</h1>
    }
}