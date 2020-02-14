import React, { Component } from 'react';
import './AboutIntro.css'
import aboutData from '../strings.json'


class AboutIntro extends Component {
  render() {
    return (
      <div>
        <div className="section-aboutintro uk-visible@m" data-aos="fade-up" >
          <div class="uk-container uk-padding ifo-container">
            <div className="uk-text-center">
              <p>{aboutData.about.aboutDescription1}</p>
              {/* <p>{aboutData.about.aboutDescription2}</p> */}

            </div>
          </div>
        </div>

        <div className="section-mobile-aboutintro uk-hidden@m" data-aos="fade-up" >
          <div class="uk-container uk-padding ifo-container">
            <div className="uk-text-center uk-text-justify">
              <p>{aboutData.about.aboutDescription1}</p>
              <p>{aboutData.about.aboutDescription2}</p>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default AboutIntro