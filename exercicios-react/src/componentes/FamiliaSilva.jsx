import React from 'react'
import M from './Membro'

export default (props) => 
    <React.Fragment>
        <M name="Higor" family={props.family}/>
        <M name="Kildery" family={props.family}/>
        <M name="Elione" family={props.family}/>
        <M name="Eunice" family={props.family}/>
    </React.Fragment>