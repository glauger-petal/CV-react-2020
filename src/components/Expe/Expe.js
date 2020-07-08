import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Expe extends Component {


  render() {
    const experiences = [
      {
        date: "Mars 2020-Aujourd'hui",
        company: "Home Dépot",
        place: "Montréal (Canada)",
        position: "Préparateur de commande de nuit"
      },
      {
        date: "Janvier 2020-Février 2020",
        company: "Toundra",
        place: "Montréal(Canada)",
        position: "Administrateur Web"
      },
      {
        date: "Février 2019-Juin 2019",
        company: "Blind Valet",
        place: "Nantes(France)",
        position: "Développeur Web Angular (Stagiaire)"
      },
      {
        date: "Septembre 2018-Janvier 2020",
        company: "Wild Code School",
        place: "Nantes (France)",
        position: "Développeur Web React (Formation)"
      },
      {
        date: "Septembre 2012-Février 2018",
        company: "Centre Aquatique",
        place: "Sablé sur Sarthe (France)",
        position: "Maitre Nageur"
      }
    ]
    return (
      
        <section className="container-picto-right">
          <ScrollableAnchor id={'expe'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_exp.svg'} alt="experiences"/>
              </div>
              <h4 className="font-weight-bold mt-2">Mes expériences</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey-op-095">
            <div className="container-date">
              {experiences.map((para, index) => (
              <div key={index} className="date-box text-center">
                <span className="font-weight-bold text-light">{para.date}</span>
                <h5 className="text-uppercase font-weight-bold txt-green mb-0">{para.company}</h5>
                <span className="font-weight-bold txt-grey">{para.place}</span><br/>
                <span className="font-weight-bold txt-grey">{para.position}</span>
                </div>
              )
              )}
            </div>
          </div>
        </section>
    )
  }
}
