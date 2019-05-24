import React from 'react'

const CompA = props => <h1>The fisrt component says: {props.value}</h1>
const CompB = props => <h1>The second component says: {props.value}</h1>

export {CompA, CompB}