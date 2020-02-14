import React, { Component } from 'react';
import './About.css'
import homeAboutData from '../strings.json'

class About extends Component {
  render() {
    return (
      <div>
        <div className="section-about uk-visible@m" data-aos="fade-up">

          <div className="uk-container uk-padding ifo-container">
            <div className="ifo-about-heading uk-text-center">
              {/* <h2>{homeAboutData.home.homeAbout.homeAboutHeading} <span className="ifo-about-heading-lorem">{homeAboutData.home.homeAbout.homeAboutHeadingHigh}</span></h2> */}
              <p className="uk-text-justify">{homeAboutData.home.homeAbout.homeAboutDescription}</p>
              <button class="uk-button uk-button-primary ifo-btn">{homeAboutData.home.homeAbout.homeAboutBtn}</button>
            </div>
          </div>
        </div>

        <div>
          <div className="uk-hidden@m" data-aos="zoom-out">
            <div className="section-mobile uk-container uk-padding">
              <div className="ifo-about-heading uk-text-center">
                {/* <h2>{homeAboutData.home.homeAbout.homeAboutHeading} <span className="ifo-about-heading-lorem">{homeAboutData.home.homeAbout.homeAboutHeadingHigh}</span></h2> */}
                <p className="uk-text-justify">{homeAboutData.home.homeAbout.homeAboutDescription}</p>
                <button class="uk-button uk-button-primary ifo-btn">{homeAboutData.home.homeAbout.homeAboutBtn}</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About