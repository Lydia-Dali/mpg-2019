import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="row footer margin_zero">
        <p className="footer_title">RESTONS EN CONTACT</p>
        <div className="container_social">
          <ul className="socialIcons">
            <li className="facebook"><a href="https://fr-fr.facebook.com/Voyageursdumonde/"><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>
            <li className="twitter"><a href="https://twitter.com/conseilsvoyages?lang=fr"><i className="fa fa-fw fa-twitter"></i>Twitter</a></li>
            <li className="instagram"><a href="https://www.instagram.com/afrenchtraveler/"><i className="fa fa-fw fa-instagram"></i>Instagram</a></li>
            <li className="pinterest"><a href="https://www.pinterest.fr/vvagabondages/"><i className="fa fa-fw fa-pinterest-p"></i>Pinterest</a></li>
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
