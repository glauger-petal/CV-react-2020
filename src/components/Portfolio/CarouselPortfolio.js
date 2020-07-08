import React, { Component } from 'react'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
  {
    src: process.env.PUBLIC_URL+'/assets/img/bicool.png',
    altText: 'Bicool',
    title: 'Bicool',
    description: 'Application web pour la réservation de vélos (réalisée en équipe).',
    tools: ["Webdesign","Git", "Github", "React", "Bootstrap", "API JC Decaux", "Google Map","méthodologie agile"],
    link: '',
    github: 'https://github.com/geoffroy72/nantes-0918-javascript-easybike'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/Hackathon.png',
    altText: 'Hackathon',
    title: 'Hackathon',
    description: "Jeux réalisé lors d'un hackathon de 24h",
    tools: ["Webdesign","JavaScript", "Bootstrap", "méthodologie agile"],
    link: '',
    github: 'https://github.com/geoffroy72/Nantes-Hackathon'
  },
  // {
  //   src: process.env.PUBLIC_URL+'/assets/img/MoviesAndMe.png',
  //   altText: 'Movies and me',
  //   title: 'Movies and me',
  //   description: 'Application Android pour rechercher des films et gérer une liste de favoris (projet personnel en cours de réalisation)',
  //   tools: ["React-Native", "Composants Android", "Redux", "API REST"],
  //   link: '',
  //   github: ''
  // },
  {
    src: process.env.PUBLIC_URL+'/assets/img/Poker-Builder.png',
    altText: 'PokerBlinders',
    title: 'PokerBlinders',
    description: "PokerBlinders est une application pour créer un cas virtuel. Afin de calculer le nombre de jetons nécessaires à un tournoi (réalisée en équipe).",
    tools: ["Webdesign", "Git", "React", "Redux", "Bootstrap", "méthodologie agile"],
    link: 'https://poker-blinders.firebaseapp.com',
    github: 'https://github.com/geoffroy72/Projet-3'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/BlogParis.png',
    altText: 'So Many Paris',
    title: 'So Many Paris',
    description: 'Blog de Photographie réalisé en équipe',
    tools: ["Git","Github", "Bootstrap", "Animations CSS3", "HTML5"],
    link: '',
    github: 'https://github.com/geoffroy72/ProjetWCS1'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/Snake.png',
    altText: 'snake',
    title: 'Snake',
    description: "Réalisation du jeu ClassicSnake (projet personnel en cours de réalisation)",
    tools: ["JavaScript", "CSS","HTML", "CANVAS"],
    link: '',
    github: 'https://github.com/geoffroy72/ClassicSnake'
  }
];



export default class CarouselPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
ß
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div className="flex-center">
            <img className="img-fluid-slide" src={item.src} alt={item.altText} />
          </div>
          <div className="info-box">
            <h1 className="text-center txt-green mt-4">{item.title}</h1>
              <p className="text-center txt-grey mb-0">
            {item.link !== '' ?
                <a href={item.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-desktop m-2 fa-lg"></i></a>
            :
            null }
                <a href={item.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github m-2 fa-lg"></i></a>
              </p>
            <div className="info-item">
              <p className="text-center font-weight-bold txt-grey mt-2 mb-0 info-item-desc">{item.description}</p>
              <p className="text-center">{item.tools.map((tool, index) =>{
                  return (
                    <span className ="badge badge-secondary m-1 bg-green txt-dark-grey" key={index}>{tool}</span>
                  )
              })}</p>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
