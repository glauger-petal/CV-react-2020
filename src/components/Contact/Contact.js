import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
      <section>
        <div className="container-contact bg-grey flex-center">

          <h5 className="font-weight-bold txt-green">Adresse</h5>
          <p className="txt-white text-center mb-4">
            7284 avenue Henri Julien<br/>
            H2R 2A8, Montreal
          </p>

          <h5 className="font-weight-bold txt-green">Téléphone</h5>
          <a className="badge badge-light mb-4" href="tel:+14382258958">(438)225-8958</a>

          <h5 className="font-weight-bold txt-green">E-mail</h5>
          <a className="badge badge-light mb-4" href="mailto:lauger.geoffroy@gmail.com">lauger.geoffroy@gmail.com</a>

          <span>
            <a href="https://github.com/geoffroy72?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github m-3 fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/geoffroy-lauger/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin m-3 fa-2x"></i></a>
          </span>

          <a className="text-center" href={process.env.PUBLIC_URL+'/assets/CV-Geoffroy LAUGER.pdf'} download>
            <h5 className="font-weight-bold mt-2">Téléchargez mon cv</h5>
          </a>

        </div>

        <div className="container-interest">
        
          <p>
            <span className="font-weight-bold">Centres d'intérêts</span><br/>
            Randonnée, Voyage, Crossfit
          </p>
          <p>
            <span className="font-weight-bold">Langues</span><br/>
            Français (langue maternelle)<br/>
            Anglais (en cours d'apprentissage)
          </p>
        </div>
      </section>
      </ScrollableAnchor>
    )
  }
}
