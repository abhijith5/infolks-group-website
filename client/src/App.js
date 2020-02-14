import React, { Component } from 'react';
import './App.css';
import 'hover.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
import Routes from './route';

const Route = require("react-router-dom").Route;


class App extends Component {
  render() {
    return (
      <div>
        <Routes></Routes>
        {/* <Redaction></Redaction> */}

        {/* <Software></Software> */}

        {/* <Outstaffing></Outstaffing> */}
        {/* <Bpo></Bpo> */}


        {/* <Team></Team> */}

        {/* <Community></Community>
        <AboutPage></AboutPage>
        <AboutIntro></AboutIntro>
        <Timeline></Timeline>
        <JoinTheTeam></JoinTheTeam> */}

        {/* <Banner></Banner>

        <About></About>
        <Mission></Mission>
        <Services></Services>
        <OurTeam></OurTeam>
        <Testimonials></Testimonials>
        <OurProducts></OurProducts> */}
        {/* 
        <Communities></Communities>
        <WorkLife></WorkLife>
        <Meetups></Meetups>
        <StackOverFlow></StackOverFlow>
        <Code></Code>
        <Video></Video>
        <Technical></Technical> */}


      </div>
    );
  }
}

export default App;
