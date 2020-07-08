import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import CarouselPortfolio from '../Portfolio/CarouselPortfolio'

export default class Portfolio extends Component {


  render() {
    return (
      
        <section className="container-picto-right">
          <ScrollableAnchor id={'portfolio'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_works.svg'} alt="works"/>
              </div>
              <h4 className="font-weight-bold mt-2">Mon portfolio </h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content flex-center bg-grey-op-095">
            <div className="container-carousel">
                <CarouselPortfolio />
            </div>
          </div>
        </section>
    )
  }
}
