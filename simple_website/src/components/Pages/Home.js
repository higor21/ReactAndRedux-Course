import React from 'react'

import image from '../assets/imgs/header-bg.jpg'

import Header from '../Common/Header'

class Home extends React.Component {
    render(){
        return (
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    textButton="TELL ME MORE"
                    showButton={true}
                    image={image}
                />
            </div>
        )
    }
}

export default Home