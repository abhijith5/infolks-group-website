import React, { Component } from 'react';
import './mission.css'
import homeMissionData from '../strings.json'

class Mission extends Component {
  render() {
    return (
      <div>
        <div className="section-mission uk-visible@m" data-aos="zoom-out">
          <div class="uk-container uk-padding ifo-container uk-text-center">
            <h2>{homeMissionData.home.homeMissionVision.homeMissionVisionHeading}</h2>
            <p>{homeMissionData.home.homeMissionVision.homeMissionDescription}</p>
            <p>{homeMissionData.home.homeMissionVision.homeVisionDescription}</p>
          </div>
        </div>

        <div className="uk-hidden@m" data-aos="zoom-out">
          <div className="section-mobile uk-container uk-padding">
            <h2>{homeMissionData.home.homeMissionVision.homeMissionVisionHeading}</h2>
            <p>{homeMissionData.home.homeMissionVision.homeMissionDescription}</p>
            <p>{homeMissionData.home.homeMissionVision.homeVisionDescription}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Mission