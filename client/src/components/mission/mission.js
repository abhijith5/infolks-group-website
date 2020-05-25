import React, { Component } from 'react';
import './mission.css'
import homeMissionData from '../strings.json'
import ServiceComponent from '../services/serviceComponent/ServiceComponent';
import RedactionComponent from '../redaction/redaction/RedactionComponent';
import secureImg from '../../assets/Group/WhyUS/OutPuts/Icons/Secure.png'


class Mission extends Component {
  render() {
    return (
      // <div>
      //   <div className="section-mission uk-visible@m" data-aos="zoom-out">
      //     <div class="uk-container uk-padding ifo-container uk-text-center">
      //       <h2>{homeMissionData.home.homeMissionVision.homeMissionVisionHeading}</h2>
      //       <p>{homeMissionData.home.homeMissionVision.homeMissionDescription}</p>
      //       <p>{homeMissionData.home.homeMissionVision.homeVisionDescription}</p>
      //     </div>
      //   </div>

      //   <div className="uk-hidden@m" data-aos="zoom-out">
      //     <div className="section-mobile uk-container uk-padding">
      //       <h2>{homeMissionData.home.homeMissionVision.homeMissionVisionHeading}</h2>
      //       <p>{homeMissionData.home.homeMissionVision.homeMissionDescription}</p>
      //       <p>{homeMissionData.home.homeMissionVision.homeVisionDescription}</p>
      //     </div>
      //   </div>

      // </div>

      <div className="ifo-container uk-container">
        <h2>Mission & Vision</h2>
        <div className="section uk-visible@m" data-aos="zoom-out">
          <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
            <div>
              <div className="uk-text-center" style={{ padding: "20px" }}>
                <img src={secureImg} width="300px"></img>
                <h2>Mission</h2>
                <p>To enable rural development through employment generation, environmental growth, and balanced regional development.</p>
              </div>
            </div>
            <div>
              <div className="uk-text-center" style={{ padding: "20px" }}>
                <img src={secureImg} width="300px"></img>
                <h2>Vision</h2>
                <p>To enable effective outsourcing at the most reasonable cost.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Mission