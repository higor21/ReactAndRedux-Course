import React, { Component } from 'react'

class TimelineItem extends Component {
    render() {
        return (
            <li className={this.props.right ? `timeline-inverted` : ''}>
                <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={this.props.img} alt="" />
                </div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.heading}</h4>
                        <h4 className="subheading">{this.props.subheading}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="text-muted">{this.props.content}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default TimelineItem