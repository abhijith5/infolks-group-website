import React, { Component } from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import Mission from './mission/mission';
import Services from './services/Services';
import OurTeam from './our-team/OurTeam';
import Testimonials from './testimonials/Testimonials';
import OurProducts from './our-products/OurProducts';
import Navigation from './navigation/Navigation';
import Back from './Back';
import newsRoom from './newsRoom/newsRoom';
import PressMentions from './pressMentions/PressMentions';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navigation></Navigation> */}
        <Banner></Banner>
        <About></About>
        {/* <Mission></Mission> */}
        <Services></Services>
        {/* <OurTeam></OurTeam>
        <Testimonials></Testimonials>
        <OurProducts></OurProducts> */}

        <PressMentions></PressMentions>

        <Back></Back>
      </div>
    )
  }
}
export default Home