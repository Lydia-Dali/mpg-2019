import React, { Component } from 'react'

import SliderActu from "./SliderActu/SliderActu.jsx";

import video from "../assets/mpg2019_bienvenue.mp4";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>I am Welcome</h1>
        <div class="header-container">
          <div class="video-container">
            <video id="header-video" width="75%" loop autoPlay muted>
              <source src={video} type="video/mp4" />
              <source src={video} type="video/ogg" />

            </video>
          </div>
        </div>
        <div className="section_intro">
          <h3 className="h3_section_intro">UN PÉRIPLE GOURMAND EN PROVENCE</h3>
          <p>MPG2019 célèbre les savoir-faire et les savoir-être du territoire des Bouches-du-Rhône afin de révéler et
             de magnifier l’ensemble des acteurs de la filière de la gastronomie, de la production à la transformation, 
             de la réalisation au service.</p>
          <br />
          <p>MPG2019 c’est une année de fête, de rencontres de chefs,
             de marchés gourmands, de pique-niques avec vue, 
             de potagers urbains… C’est tout un voyage gastronomique sur le territoire des Bouches-du-Rhône.</p>
        </div>
        
        <SliderActu />
      </div>
    )
  }
}
