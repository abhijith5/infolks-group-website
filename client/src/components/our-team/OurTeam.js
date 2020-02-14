import React, { Component } from 'react';
import './OurTeam.css'
import OurTeamComponent from './ourTeamComponent/OurTeamComponent';
import OurTeamMComponent from './ourTeamMComponenet/OurTeamMComponent';
import homeOurTeamData from '../strings.json'

class OurTeam extends Component {
  render() {
    return (
      <div>
        <div className="section-ourteam uk-visible@m" data-aos="fade-up">
          <div class="uk-container uk-padding ifo-container">
            <h2> {homeOurTeamData.home.homeOurTeam.homeOurTeamHeading}
              <span className="ifo-about-heading-lorem">{homeOurTeamData.home.homeOurTeam.homeOurTeamHeadingHigh} </span>
            </h2>
            <div className="uk-text-center uk-padding" style={{ marginTop: "20px" }}>
              <p style={{ paddingLeft: "25px", paddingRight: "25px" }}></p>
            </div>
            <div className="ifo-services-card">
              <div class="uk-child-width-1-3 uk-text-center" uk-grid="true">

                <OurTeamComponent
                  teamImagePosition={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImagePosition}
                  teamImageUrl={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImageUrl}>
                  {homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamDesc}
                </OurTeamComponent>
                <OurTeamComponent
                  teamImagePosition={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImagePosition}
                  teamImageUrl={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImageUrl}>
                  {homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamDesc}
                </OurTeamComponent>  <OurTeamComponent
                  teamImagePosition={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImagePosition}
                  teamImageUrl={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImageUrl}>
                  {homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamDesc}
                </OurTeamComponent>
              </div>
            </div>
          </div>
        </div>

        <div className="section-mobile uk-hidden@m" data-aos="fade-up">
          <div className="uk-container uk-padding">
            <h2> {homeOurTeamData.home.homeOurTeam.homeOurTeamHeading}
              <span className="ifo-about-heading-lorem">{homeOurTeamData.home.homeOurTeam.homeOurTeamHeadingHigh} </span>
            </h2>
            <div className="uk-text-center uk-padding">
              {/* <p className="uk-text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
              <OurTeamMComponent
                teamImagePosition={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImagePosition}
                teamImageUrl={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImageUrl}>
                {homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamDesc}
              </OurTeamMComponent>
              <OurTeamMComponent
                teamImagePosition={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImagePosition}
                teamImageUrl={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImageUrl}>
                {homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamDesc}
              </OurTeamMComponent>
              <OurTeamMComponent
                teamImagePosition={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImagePosition}
                teamImageUrl={homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamImageUrl}>
                {homeOurTeamData.home.homeOurTeam.homeOurTeam1.teamDesc}
              </OurTeamMComponent>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default OurTeam