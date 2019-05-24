import React from 'react'
import ReactDOM from 'react-dom'
//import F from './componentes/Familia'
//import M from './componentes/Membro'
//import MC,{F1 as Fisrt1, F2 as Second2} from './componentes/MultiComponentes'
//import {CompA, CompB as B} from './componentes/DoisComponentes'
//import CwF from './componentes/ComponentWithFunction'
import {Parent as P} from './componentes/ComponentParent'
import C from './componentes/ComponentChild'

const element = document.getElementById('root')
ReactDOM.render(

    // way to pass data from child to parent
    <P name_p="Valdir" title="Pai">
        <C name_c="Higor"/>
    </P>
    
    // nothing
    /* <CwF /> */

    // ways to propagate properties from parent to child by using the child component itself
    
    // first way
    /*<F family="Silva">
        <M name="Júlio"/>
    </F>*/
    
    //second way
    /* <F family="Silva">
        <M name="Higor"/>
        <M name="Alex"/>
        <M name="Felipe"/>
    </F> */

    /* <React.Fragment>
        <Fisrt1 message="First Option"/>
        <Second2 message="Second Option"/>
        <MC message="Third Option"/>
    </React.Fragment> */

    /* <React.Fragment>
        <CompA value="Hi, I'm a A component!" />
        <B value="Hi, I'm a B component!" />
        <CompA value="Hi, I'm not a A component!" />
    </React.Fragment> */

    // class 14 and 15
    //<FirstComponent value="Bom dia" aBcD={Math.random()}/>
, element)