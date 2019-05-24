import React from 'react'

export default (props) => 
    <React.Fragment>
        <p>I'm {props.name} from {props.family} family</p>
        {console.log(props)}
    </React.Fragment>
        