import React, {Component} from 'react'
import './Calculator.css'

import Button from './components/Button'
import Display from './components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}

    clearMemory = () => {
        this.setState({...initialState})
    }
    
    setOperation = (operation) => {
        if(!this.state.current && operation === '=')
            return 
        let values = {...this.state.values}
        if(!this.state.current){
            values[this.state.current] = parseFloat(this.state.displayValue)
            this.setState({
                operation: operation,
                values: values,
                current: 1,
                clearDisplay: true
            })
            return
        }
        values[this.state.current] = parseFloat(this.state.displayValue)
        let str_to_exec = `${values[0]}${this.state.operation}${values[1]}`
        values[0] = (eval(str_to_exec).toString().length >= 12) ? eval(str_to_exec).toFixed(3) : eval(str_to_exec)
        this.setState({
            values: values,
            displayValue: values[0],
            current: 0
        })
        console.log(this.state)
    }
    
    addDigit = (n) => {
        if(
            (n === '.' && this.state.displayValue.includes('.')) ||
            (this.state.displayValue === '0' && n === '0') || 
            (n === '.' && this.state.displayValue === '0')
        )
            return

        if(this.state.clearDisplay){
            this.state.clearDisplay = false
            this.state.displayValue = '0'
        }

        this.setState({
            displayValue: (this.state.displayValue === '0') ? n : this.state.displayValue + n
        })
        console.log(this.state)
    }

    render(){
        return <div className='calculator'>
            <Display value={this.state.displayValue} />
            <Button label="AC" click={this.clearMemory} triple/>
            <Button label="/" click={this.setOperation} operation/>
            <Button label="7" click={this.addDigit}/>
            <Button label="8" click={this.addDigit}/>
            <Button label="9" click={this.addDigit}/>
            <Button label="*" click={this.setOperation} operation/>
            <Button label="4" click={this.addDigit}/>
            <Button label="5" click={this.addDigit}/>
            <Button label="6" click={this.addDigit}/>
            <Button label="-" click={this.setOperation} operation/>
            <Button label="1" click={this.addDigit}/>
            <Button label="2" click={this.addDigit}/>
            <Button label="3" click={this.addDigit}/>
            <Button label="+" click={this.setOperation} operation/>
            <Button label="0" click={this.addDigit} double/>
            <Button label="." click={this.addDigit}/>
            <Button label="=" click={this.setOperation} operation/>
        </div>
    }
}