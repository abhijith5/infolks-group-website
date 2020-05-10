import React, { Component } from 'react';
import './Navigation.css'

import Home from '../Home';
import AboutPage from '../aboutPage/AboutPage';

import logoImg from '../../assets/Logo/logowww.png'

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
const Route = require("react-router-dom").Route;

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="uk-navbar-container uk-visible@m" uk-navbar="true" style={{ zIndex: 900 }}>
          <div class="uk-navbar-left" style={{ paddingLeft: "30px", width: "40%" }}>
            <ul class="uk-navbar-nav">
              <li><img src={logoImg} width="40%" height="auto" style={{ marginTop: "-15px" }}></img></li>
            </ul>
          </div>

          <div class="uk-navbar-right" style={{ paddingRight: "50px", paddingTop: "-30px" }}>
            <ul class="uk-navbar-nav ifo-navigation-li-a">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/ourteam">Our Team</Link></li>
              <li><Link to="https://infolks.info/career">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://www.infolks.info/blog/">Blog</a></li>

            </ul>
          </div>
        </nav>

        <div className="uk-hidden@m">
          <div className="uk-text-right">
            <button class="ifo-burger-btn uk-button uk-button-default uk-margin-small-right"
              type="button"
              uk-toggle="target: #offcanvas-slide"
              style={{ border: "none", marginBottom: "-80px" }}>
              <img src="https://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png" width="45" height="auto" ></img>
            </button>
          </div>

          <div id="offcanvas-slide" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar" style={{ backgroundColor: "#2e4d9f" }}>

              <button class="uk-offcanvas-close" type="button" uk-close="true"></button>
              <ul className="uk-list" style={{ fontSize: "20px", paddingLeft: "35px" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/ourteam">Our Team</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Blog</a></li>

              </ul>
              <hr></hr>
              <ul className="uk-list" style={{ fontSize: "20px", paddingLeft: "35px" }}>
                <li><a href="#">Image Annotation</a></li>
                <li><Link to="software">Software Solutions</Link></li>
                <li><Link to="redaction">Redaction</Link></li>
                <li><Link to="bpo">BPO Services</Link></li>
                <li><Link to="outstaffing">Out Staffing</Link></li>
              </ul>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Navigation