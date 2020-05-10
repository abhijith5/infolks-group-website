import React, { Component } from 'react';
import AboutPage from './aboutPage/AboutPage';
import AboutIntro from './about-intro/AboutIntro';
import Timeline from './timeline/Timeline';
import JoinTheTeam from './jointheteam/JoinTheTeam';
import Back from './Back';


class AboutHome extends Component {
  render() {
    return (
      <div>
        <AboutPage></AboutPage>
        <AboutIntro></AboutIntro>
        <Timeline></Timeline>
        {/* <JoinTheTeam></JoinTheTeam> */}

        <Back></Back>
      </div>
    )
  }
}
export default AboutHome