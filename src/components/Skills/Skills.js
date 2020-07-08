import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Skills extends Component {
  render() {
    return (
        <section className="container-picto-left">
          <ScrollableAnchor id={'skills'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_comp.svg'} alt="cercle"/>
              </div>
              <h4 className="font-weight-bold mt-2">Mes compétences</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey">
            <div className="skills-container">

              <div className="logo-skill flex-center">
                <i className="devicon-html5-plain icon"></i>
                <div className="text-icon font-weight-bold">HTML5</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-css3-plain icon"></i>
                <div className="text-icon font-weight-bold">CSS3</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-bootstrap-plain icon"></i>
                <div className="text-icon font-weight-bold">BOOTSTRAP</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-javascript-plain icon"></i>
                <div className="text-icon font-weight-bold">JAVASCRIPT(ES6)</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-react-original icon"></i>
                <div className="text-icon font-weight-bold">REACT</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-angularjs-plain icon"></i>
                <div className="text-icon font-weight-bold">ANGULAR</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="fab fa-npm icon"></i>
                <div className="text-icon font-weight-bold">NPM</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-git-plain icon"></i>
                <div className="text-icon font-weight-bold">GIT</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-github-plain icon"></i>
                <div className="text-icon font-weight-bold">GITHUB</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-visualstudio-plain icon"></i>
                <div className="text-icon font-weight-bold">VISUAL STUDIO</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-linux-plain icon"></i>
                <div className="text-icon font-weight-bold">LINUX</div>
              </div>

              <div className="logo-skill flex-center">
                  <i className="fa fa-sync-alt icon"></i>
                  <div className="text-icon font-weight-bold">METHODES AGILES</div>
              </div>

            </div>
          </div>
        </section>
    )
  }
}
