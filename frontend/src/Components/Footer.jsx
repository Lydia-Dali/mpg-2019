import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="row footer margin_zero">
        <p className="footer_title">RESTONS EN CONTACT</p>
        <div className="container_social">
          <ul className="socialIcons">
            <li className="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MPG2019/"><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>
            <li className="twitter"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mpg2019"><i className="fa fa-fw fa-twitter"></i>Twitter</a></li>
            <li className="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mpg2019/"><i className="fa fa-fw fa-instagram"></i>Instagram</a></li>
            <li className="pinterest"><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.fr/bemartine/gourm%C3%A9diterran%C3%A9enmediterranean-diet/mpg-2019-ann%C3%A9e-de-la-gastronomie-en-provence/"><i className="fa fa-fw fa-pinterest-p"></i>Pinterest</a></li>
          </ul>
        </div>
        <ul>
          <Link className="sous-menu" to="/Presse">
            <li>Presse</li>
          </Link>
          <Link className="sous-menu" to="/Contact">
            <li>Contact</li>
          </Link>          
          <Link className="sous-menu" to="/Cgu">
            <li>Mentions Légales</li>
          </Link>
        </ul>
        <p className="copyright">2019 Powered by Lydia Dali © MPG 2019 / Code4Marseille - TOUS DROITS RÉSERVÉS.</p>
      </div>
    )
  }
}
