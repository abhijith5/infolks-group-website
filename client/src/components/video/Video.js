import React, { Component } from 'react';
import VideoComponent from './videoComponent/VideoComponent';

class Video extends Component {
  render() {
    return (
      <div>
        <div className="section-video uk-visible@m" data-aos="fade-up">
          <div className="uk-container uk-padding ifo-container">
            <div className="uk-text-left">
              <h2>Community <span className="ifo-about-heading-lorem">Videos</span></h2>
            </div>
            <div class="uk-child-width-1-3 uk-text-center" uk-grid="true">
              <div>
                <VideoComponent></VideoComponent>
              </div>
              <div>
                <VideoComponent></VideoComponent>
              </div>
              <div>
                <VideoComponent></VideoComponent>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="uk-container uk-padding">
            <div className="uk-text-center">
              <h2>Community <span className="ifo-about-heading-lorem">Videos</span></h2>
            </div>
            <div className="">
              <div className="uk-card uk-card-deault uk-card-body" style={{ marginBottom: "20px", backgroundColor: "red", height: "200px" }}>
              </div>
              <a href="" style={{ fontSize: "20px" }}>View more Youtube </a>

            </div>
          </div>
        </div>

      </div>

    )
  }
}
export default Video