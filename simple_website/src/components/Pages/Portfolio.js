import React, { Component } from 'react'

// images
import img1 from '../assets/imgs/portfolio/01-thumbnail.jpg'
import img2 from '../assets/imgs/portfolio/02-thumbnail.jpg'
import img3 from '../assets/imgs/portfolio/03-thumbnail.jpg'
import img4 from '../assets/imgs/portfolio/04-thumbnail.jpg'
import img5 from '../assets/imgs/portfolio/05-thumbnail.jpg'
import img6 from '../assets/imgs/portfolio/06-thumbnail.jpg'


// Common Components
import PortfolioItem from '../Common/PortfolioItem'

const portfolio_itens = [
    {title: 'Threads', subtitle: 'Illustration', image: img1},
    {title: 'Explore', subtitle: 'Graphic Design', image: img2},
    {title: 'Finish', subtitle: 'Identity', image: img3},
    {title: 'Lines', subtitle: 'Branding', image: img4},
    {title: 'Southwest', subtitle: 'Website Design', image: img5},
    {title: 'Window', subtitle: 'Photography', image: img6}
]

class Portfolio extends Component {

    render() {
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {portfolio_itens.map((p, i) => {
                            return <PortfolioItem {...p} key={i}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio