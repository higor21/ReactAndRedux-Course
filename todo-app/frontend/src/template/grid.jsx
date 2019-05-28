import React, {Component} from 'react'

export default class Grid extends Component { 
    addClasses(numbers){
        const opts = (numbers) ? numbers.split(' ') : []

        let classes = ''
        classes += (opts[0]) ? `col-xs-${opts[0]}` : '';
        classes += (opts[1]) ? `col-sm-${opts[1]}` : '';
        classes += (opts[2]) ? `col-md-${opts[2]}` : '';
        classes += (opts[3]) ? `col-lg-${opts[3]}` : '';

        return classes
    }

    render(){
        return <div className={this.addClasses(this.props.)}>

        </div>
    }
}