import React, { Component } from 'react';
import './Banner.css'
import homeData from '../strings.json'

import banneImg from '../../assets/Group/Home/oUTpUT/Home.jpg'
import logo from '../../assets/iso.png'

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">


          <div className="ifo-banner-bg">
            <div class="uk-overlay-primary uk-position-cover" style={{ zIndex: 300, height: "100vh", marginTop: "-20px" }}></div>

            <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900 }}>
              <h1 className="ifo-fontweight-700 ifo-white" style={{ fontSize: "70px" }}>{homeData.home.homeHeading}</h1>
              <span className="ifo-white">{homeData.home.homeDesc}</span><br></br>
              <div style={{ marginTop: "20px" }}>
                <img src={logo} height="100px" width="100px" style={{ marginRight: "50px" }}></img>
                <img src={logo} height="100px" width="100px" style={{ marginRight: "50px" }}></img>
                <img src={logo} height="100px" width="100px" style={{ marginRight: "50px" }}></img>

              </div>
              <div style={{ marginTop: "20px" }}>
                <button class="uk-button uk-button-danger" style={{ borderRadius: "10px" }}>Download brocure</button>
              </div>
            </div>

          </div>
          <div className="uk-hidden@m ifo-mobile-padding">
            <h1>outstading outstaffing</h1>
          </div>


          {/* <div class="uk-inline">
            <img src={banneImg} alt="" style={{ marginTop: "-140px", height: "100vh", width: "100vw" }} />
            <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-140px", height: "100vh", width: "100vw" }} ></div>
            <div class="uk-overlay uk-dark">
              <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900 }} uk-parallax="y:-200">
                <h1 className="ifo-fontweight-700 ifo-white" style={{ fontSize: "70px", marginTop: "-140px" }} >{homeData.home.homeHeading}</h1>
                <span className="ifo-white">{homeData.home.homeDesc}</span>
              </div>
            </div>
            <div className="uk-hidden@m ifo-mobile-padding" >
              <h1>outstading outstaffing</h1>
            </div>
          </div> */}
        </div>


        <div className="uk-hidden@m">
          <div className="ifo-mobile-banner-bg">
            <div className="uk-container">
              <div className="">
                <h1 style={{ marginTop: "80%", fontWeight: "700" }} className="ifo-white">{homeData.home.homeHeading}</h1>
                <span className="ifo-white">{homeData.home.homeDesc}</span>

              </div>
              <div>
              </div>
            </div>

          </div>
        </div>
      </div >
    )
  }
}

export default Banner