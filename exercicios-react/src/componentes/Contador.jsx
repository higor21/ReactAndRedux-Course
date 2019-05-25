import React, {Component} from 'react'


export default class Contador extends Component {

    state = {
        value: this.props.value
    }

    alterValue = (diff) => {
        this.setState({
            value: this.state.value + diff
        })
    }

    passEvent = (e) => {
        console.log(e)
    }

    render(){
        return <div>            
            <div>Value: {this.state.value}</div>
            <button onClick={() => this.alterValue(1)}>Inc</button>
            <button onClick={() => this.alterValue(-1)}>Dec</button>
            <button onClick={this.passEvent}>Dec</button>
        </div>
    }
}