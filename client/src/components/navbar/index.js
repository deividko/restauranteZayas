// npm packages
import React from 'react';
import {Link} from 'react-router';

import NavbarLink from './navbarLink';
import Logout from './logout';

const NavBar = ({actualPath, user}) => (
  <div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">FoodPlus</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <NavbarLink path="/" actualPath={actualPath}>
              <span className="glyphicon glyphicon-home" /> Home
            </NavbarLink>
            <NavbarLink path="/plates" actualPath={actualPath}>
              <span className="glyphicon glyphicon-cutlery" /> Plates
            </NavbarLink>
            <NavbarLink path="/about" actualPath={actualPath}>
              <span className="glyphicon glyphicon-info-sign" /> About us
            </NavbarLink>
            <NavbarLink path="/testimonials" actualPath={actualPath}>
              <span className="glyphicon glyphicon-star" /> Testimonials
            </NavbarLink>
            {user ?
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="glyphicon glyphicon-user" /> {user.login} <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li role="separator" className="divider" />
                  <li><Logout /></li>
                </ul>
              </li>
            : null}
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
