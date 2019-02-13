import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <h1>I am a nav</h1>
        <ul>
            <NavLink exact to="/" onClick="refreshPage()" activeClassName="selected">
              <li className="active">Welcome</li>
            </NavLink>
            <NavLink exact to="/Agenda" activeClassName="selected">
              <li>Agenda</li>
            </NavLink>
            <NavLink exact to="/Incontournable" activeClassName="selected">
              <li>Incontournable</li>
            </NavLink>
            <NavLink exact to="/Gallerie">
              <li>Gallerie</li>
            </NavLink>
            <NavLink exact to="/Presse">
              <li>Presse</li>
            </NavLink>
            <NavLink exact to="/Contact">
              <li>Contact</li>
            </NavLink>
          </ul>
      </div>
    )
  }
}
