import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Studies extends Component {


  render() {
    const experiences = [
      {
        date: "Septembre 2018 - Février 2019",
        diplome: "Développement Web et Mobile",
        option: "Javascript/react",
        place: "Wild Code School - Nantes",
      },
      {
        date: "2011-2012",
        diplome: "BEESAN (Brevet d'Educateur Sportif des Activites de la Natation)",
        place: "BPJEPS - Dinard",
      },
      {
        date: "2010-2011",
        diplome: "BNSSA",
        place: "Centre Atlantides - Le Mans",
      },
      {
        date: "2005-2008",
        diplome: "BAC STG (Sciences et Technologies de la Gestion)",
        option: "Marketing",
        place: "Lycée Estournelle - La Fleche",
      }
    ]
    return (
      
        <section className="container-picto-left">
          <ScrollableAnchor id={'studies'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_etudes.svg'} alt="études"/>
              </div>
              <h4 className="font-weight-bold mt-2">Mes études</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey">
            <div className="container-date">
              {experiences.map((para, index) => (
              <div className="date-box text-center" key={index}>
                <span className="font-weight-bold text-light">{para.date}</span>
                <h5 className="text-uppercase font-weight-bold txt-green mb-0">{para.diplome}</h5>
                <h5 className="text-uppercase font-weight-bold txt-green">{para.option}</h5>
                <h6 className="font-weight-bold text-light">{para.mention}</h6>
                <span className="font-weight-bold txt-grey">{para.place}</span><br/>
              </div>
              )
              )}
            </div>
          </div>
        </section>
    )
  }
}
