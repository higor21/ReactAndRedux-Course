import React, { Component } from 'react'

import img1 from '../assets/imgs/team/1.jpg'
import img2 from '../assets/imgs/team/2.jpg'
import img3 from '../assets/imgs/team/3.jpg'
import TeamMember from '../Common/TeamMember'

const team = [
    {name: 'Kay Garland', img: img1, role: 'Lead Designer'},
    {name: 'Larry Parker', img: img2, role: 'Lead Marketer'},
    {name: 'Diana Pertersen', img: img3, role: 'Lead Developer'}
]

class Team extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {team.map((t, i) => {
                            return <TeamMember key={i} {...t}/>
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team