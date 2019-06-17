import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton';
import { add, changeDescription, search, clear } from './todoActions'

export class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){
        const { add, search, description, clear } = this.props
        if(e.key == 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if(e.keyCode == 27){
            clear()
        }
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        const { add, search, description, clear } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input
                        id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        value={description}
                        onKeyUp={this.keyHandler}
                    ></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <div className="space_blocks">
                        <IconButton style='info' icon='search'
                            onClick={search}
                        />
                        <IconButton style='primary' icon='plus'
                            onClick={() => add(description)}
                        />
                        <IconButton style='primary' icon='close'
                            onClick={clear}
                        />
                    </div>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
    bindActionCreators({add, changeDescription, search, clear},  dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)