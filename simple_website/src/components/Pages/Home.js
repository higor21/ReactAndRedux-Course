import React from 'react'

import Header from '../Common/Header'
import image from '../assets/imgs/header-bg.jpg'

class Home extends React.Component {
    render(){
        return (
            <Header 
                title="Welcome To Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                textButton="TELL ME MORE"
                showButton={true}
                image={image}
            />
        )
    }
}

export default Home