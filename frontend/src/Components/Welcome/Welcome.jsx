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
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <p className="section_title">ÉVENEMENT</p>
        <SliderActu />
      </div>
    )
  }
}
