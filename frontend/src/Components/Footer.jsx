import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <ul>            
            <Link className="sous-menu" to="/Contact">
              <li>Contact</li>
            </Link>
            <Link className="sous-menu" to="/Presse">
              <li>Presse</li>
            </Link>
            <Link className="sous-menu" to="/Help">
              <li>Help</li>
            </Link>
            <Link className="sous-menu" to="/Faq">
              <li>FAQ</li>
            </Link>
            <Link className="sous-menu" to="/Cgu">
              <li>C.G.U</li>
            </Link>
            <h6>Powered by Lydia Dali / Code4Marseille</h6>
          </ul>
        
      </div>
    )
  }
}
