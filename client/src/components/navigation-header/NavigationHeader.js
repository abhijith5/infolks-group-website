import React, { Component } from 'react';
import './NavigationHeader.css'

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
const Route = require("react-router-dom").Route;

class NavigationHeader extends Component {
  render() {
    return (
      <div>
        <nav className="uk-navbar-container uk-visible@m" uk-navbar="true" style={{ height: "40px" }} style={{ zIndex: 900 }}>
          <div className="uk-navbar-right" style={{ paddingRight: "50px" }}>

            <ul className="uk-navbar-nav ifo-nav" style={{ marginTop: "-20px" }}>
              <li><a href="https://www.infolks.info/">Data Labelling</a></li>
              <li><Link to="outstaffing">Out Staffing</Link></li>
              <li><Link to="redaction">Redaction</Link></li>
              <li><Link to="software">Software Solutions</Link></li>
              <li><Link to="bpo">BPO Services</Link></li>

            </ul>

          </div>
        </nav>


        <div className="uk-hidden@m">

        </div>
      </div>
    )
  }
}

export default NavigationHeader