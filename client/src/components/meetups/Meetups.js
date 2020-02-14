import React, { Component } from 'react';
import './Meetups.css'
import communitiesData from '../strings.json'


class Meetups extends Component {
  render() {
    return (
      <div>
        <div className="section uk-visible@m" data-aos="fade-up">
          <div className="uk-container uk-padding ifo-container">
            <div className="uk-text-center">
              <h2>{communitiesData.communities.meetups.meetupsHeading}</h2>
            </div>
            <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
              <div style={{ width: "60%" }}>
                <div class="uk-card uk-card-default uk-card-body meetup-bg" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left">
                    <p className="ifo-white" style={{ margin: 0 }}>{communitiesData.communities.meetups.meetups1.meetupsDate}</p>
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                    <button className="uk-button uk-button-default ifo-white">Know More..</button>
                  </div>
                </div>
              </div>
              <div style={{ width: "40%", paddingLeft: "10px" }} >
                <div class="uk-card uk-card-default uk-card-body meetup-bg" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left">
                    <p className="ifo-white" style={{ margin: 0 }}>{communitiesData.communities.meetups.meetups1.meetupsDate}</p>
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                    <button className="uk-button uk-button-default ifo-white">Know More..</button>
                  </div>
                </div>
              </div>

              <div style={{ width: "50%" }}>
                <div class="uk-card uk-card-default uk-card-body meetup-bg" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left">
                    <p className="ifo-white" style={{ margin: 0 }}>{communitiesData.communities.meetups.meetups1.meetupsDate}</p>
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                    <button className="uk-button uk-button-default ifo-white">Know More..</button>
                  </div>
                </div>
              </div>
              <div style={{ width: "50%", paddingLeft: "10px" }}>
                <div class="uk-card uk-card-default uk-card-body meetup-bg" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left">
                    <p className="ifo-white" style={{ margin: 0 }}>{communitiesData.communities.meetups.meetups1.meetupsDate}</p>
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                    <button className="uk-button uk-button-default ifo-white">Know More..</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-meetups">
            <div className="uk-container uk-padding">
              <h1>{communitiesData.communities.meetups.meetupsHeading}</h1>
              <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m" style={{ boxShadow: "none", backgroundColor: "#2d4e9f", height: "250px", marginBottom: "30px" }}>
                <div className="ifo-mobile-meetup">
                  <h4 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsDate}</h4>
                  <h3 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                  <button className="uk-button uk-button-default ifo-btn">Learn More...</button>
                </div>
              </div>

              <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m" style={{ boxShadow: "none", backgroundColor: "#2d4e9f", height: "250px" }}>
                <div className="ifo-mobile-meetup">
                  <h4 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsDate}</h4>
                  <h3 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                  <button className="uk-button uk-button-default ifo-btn">Learn More...</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Meetups