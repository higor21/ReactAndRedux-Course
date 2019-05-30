import React, {Component} from 'react'

export default class Grid extends Component { 
    addClasses(numbers){
        const cols = (numbers) ? numbers.split(' ') : []

        let classes = ''
        classes += (cols[0]) ? `col-xs-${cols[0]} ` : '';
        classes += (cols[1]) ? `col-sm-${cols[1]} ` : '';
        classes += (cols[2]) ? `col-md-${cols[2]} ` : '';
        classes += (cols[3]) ? `col-lg-${cols[3]} ` : '';

        return classes
    }

    render(){
        return <div className={this.addClasses(this.props.cols || 12)}>
            {this.props.children}
        </div>
    }
}