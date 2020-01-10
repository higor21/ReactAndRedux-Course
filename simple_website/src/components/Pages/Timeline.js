import React, { Component } from 'react'

import img1 from '../assets/imgs/timeline/1.jpg'
import img2 from '../assets/imgs/timeline/2.jpg'
import img3 from '../assets/imgs/timeline/3.jpg'
import img4 from '../assets/imgs/timeline/4.jpg'

import TimelineItem from '../Common/TimelineItem'

const timelineItens = [
    {right: false, img: img1, heading: '2009-2011', subheading:'Our Humble Beginnings' , content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {right: true, img: img2, heading: 'March 2011', subheading:'An Agency is Born' , content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {right: false, img: img3, heading: 'December 2012', subheading:'Transition to Full Service' , content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {right: true, img: img4, heading: 'July 2014', subheading:'Phase Two Expansion' , content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'}
]

class Timeline extends Component {
    render() {
        return (
            <ul className="timeline">
                {timelineItens.map((tl, i) => {
                    return <TimelineItem key={i} {...tl}/>
                })}
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        <h4>Be Part
                            <br />Of Our
                            <br />Story!
                        </h4>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Timeline