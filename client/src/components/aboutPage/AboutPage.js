import React, { Component } from 'react';
import './AboutPage.css'
import aboutData from '../strings.json'
import aboutImg from '../../assets/Group/AboutUs/AboutUs.jpg'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="section-aboutPage uk-visible@m">

          <div class="uk-inline">
            <img src={aboutImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
            <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
            <div class="">
              <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900 }}>
                <h1 className="ifo-white" style={{ fontSize: "60px", paddingTop: "8%" }}>{aboutData.about.aboutHeading} </h1>
                <p className="ifo-white">{aboutData.about.aboutShortDescription}</p>
              </div>
            </div>
          </div>

          {/* <div class="uk-overlay-primary uk-position-cover" style={{ zIndex: 300, height: "80vh" }}></div>

          <div className="ifo-communities-heading" style={{ zIndex: 900 }}>
            <h1 className="ifo-white" style={{ fontSize: "60px", paddingTop: "8%", zIndex: 900 }}>{aboutData.about.aboutHeading} </h1>
            <p className="ifo-white" style={{ zIndex: 900 }}>{aboutData.about.aboutShortDescription}</p>
          </div> */}
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-about">
            <div className="ifo-about-heading uk-padding" style={{ paddingTop: "160px", zIndex: 900 }}>
              <h1 className="ifo-white" style={{ fontSize: "60px", paddingTop: "8%", zIndex: 900 }}>{aboutData.about.aboutHeading} </h1>
              <p className="ifo-white">{aboutData.about.aboutShortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage