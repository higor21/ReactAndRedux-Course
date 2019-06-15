import React from 'react'
import { connect } from 'react-redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton';

const TodoForm = props => {

    const keyHandler = (e) => {
        if(e.key == 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.keyCode == 27){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input
                    id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.onChange}
                    value={props.description}
                    onKeyUp={keyHandler}
                ></input>
            </Grid>
            <Grid cols='12 3 2'>
                <div className="space_blocks">
                    <IconButton style='info' icon='search'
                        onClick={props.handleSearch}
                    />
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}
                    />
                    <IconButton style='primary' icon='close'
                        onClick={props.handleAdd}
                    />
                </div>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
export default connect(mapStateToProps)(TodoForm)