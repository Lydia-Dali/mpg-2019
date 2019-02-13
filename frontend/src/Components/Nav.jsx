import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="container-fluid myContainerFluid">

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
        <a className="navbar-brand" href="#">
        <h1>I am a nav</h1>
        </a>
        <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarNav" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <NavLink exact to="/" onClick="refreshPage()" activeClassName="selected">
              <li className="active">
              <a class="nav-link" href="#">
              <h3>Welcome</h3><span class="sr-only">(current)</span></a></li>
            </NavLink>
            <NavLink exact to="/Agenda" activeClassName="selected">
              <li className="nav-item"><a class="nav-link" href="#agenda">
                        <h3>Agenda</h3></a></li>
            </NavLink>
            <NavLink exact to="/Incontournable" activeClassName="selected">
              <li className="nav-item"><a class="nav-link" href="#incontournable">
                        <h3>Incontournable</h3></a></li>
            </NavLink>
            <NavLink exact to="/Gallerie">
              <li className="nav-item"><a class="nav-link" href="#gallerie">
                        <h3>Gallerie</h3></a></li>
            </NavLink>
            <NavLink exact to="/Presse">
              <li className="nav-item"><a class="nav-link" href="#presse">
                        <h3>Presse</h3></a></li>
            </NavLink>
            <NavLink exact to="/Contact">
              <li className="nav-item"><a class="nav-link" href="#presse">
                        <h3>Contact</h3></a></li>
            </NavLink>
          </ul>
          </div>
        </nav>


      </div>
    )
  }
}
