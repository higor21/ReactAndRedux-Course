import React from 'react'
import {childrenWithProps} from '../utils/childrenWithProps'

export default (props) => 
    <div>
        <h1>Family</h1>

        {childrenWithProps(props)}

        {/* Passing only one property to the child element, but you can pass more than one to it */}
        {/* React.cloneElement(props.children, {family: props.family}) */}
        {/* Passing all the properties to the child element by reference */}
        {/* React.cloneElement(props.children, props) */}
        {/* Passing all the properties to the child element by copy | The property '...' allow to pass datas by copy*/}
        {/* React.cloneElement(props.children, {...props}) */}
    </div>