import React, { Component } from 'react';
import AboutPage from './aboutPage/AboutPage';
import AboutIntro from './about-intro/AboutIntro';
import Timeline from './timeline/Timeline';
import JoinTheTeam from './jointheteam/JoinTheTeam';
import Back from './Back';
import Mission from './mission/mission';
import Team from './team/Team';
import OurFolks from './ourFolks/OurFolks';


class AboutHome extends Component {
  render() {
    return (
      <div>
        <AboutPage></AboutPage>
        <AboutIntro></AboutIntro>
        <Mission></Mission>
        <Team></Team>
        <OurFolks></OurFolks>

        <Timeline></Timeline>
        {/* <JoinTheTeam></JoinTheTeam> */}

        <Back></Back>
      </div>
    )
  }
}
export default AboutHome