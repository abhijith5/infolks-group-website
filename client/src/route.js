import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'hover.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import Home from './components/Home'

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
import AboutPage from './components/aboutPage/AboutPage';
import AboutHome from './components/About';
import Navigation from './components/navigation/Navigation';
import NavigationHeader from './components/navigation-header/NavigationHeader';
import Footer from './components/footer/Footer';
import Community from './components/Community';
import OurTeam from './components/our-team/OurTeam';
import Team from './components/team/Team';
import Software from './components/software/Software';
import Redaction from './components/redaction/Redaction';
import Bpo from './components/bpo/Bpo';
import Outstaffing from './components/outstaffing/Outstaffing';
import Career from './components/career/Career';
import Contact from './components/contact/Contact';
import newsRoom from './components/newsRoom/newsRoom';

const Route = require("react-router-dom").Route;


class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavigationHeader></NavigationHeader>
          <Navigation></Navigation>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutHome} />
            <Route path="/community" component={Community} />
            <Route path="/ourteam" component={Team} />

            <Route path="/software" component={Software} />
            <Route path="/redaction" component={Redaction} />
            <Route path="/bpo" component={Bpo} />
            <Route path="/outstaffing" component={Outstaffing} />
            <Route path="/career" component={Career} />
            <Route path="/contact" component={Contact} />
            <Route path="/newsroom" component={newsRoom} />

          </Switch>

          <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default Routes;
