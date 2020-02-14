import React, { Component } from 'react';
import './Communities.css'
import communitiesData from '../strings.json'
import commImg from '../../assets/Group/CommunityPage/OutPut/community.png'

class Communities extends Component {
  render() {
    return (
      <div>
        <div className="section-communities uk-visible@m">
          <div class="uk-inline">
            <img src={commImg} alt="" style={{ height: "80vh", width: "100vw", marginTop: "-20px" }} />
            <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
            <div class="">
              <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900 }}>
                <h1 className="ifo-white" style={{ fontSize: "60px" }}>{communitiesData.communities.communitiesHeading}</h1>
                <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "60px" }}> {communitiesData.communities.communitiesHeadingHigh}</span>
                <p className="ifo-white">{communitiesData.communities.communitiesDescription}</p>
              </div>
            </div>
          </div>

          {/* <div class="uk-overlay-primary uk-position-cover" style={{ zIndex: 300, height: "80vh" }}></div>

          <div className="ifo-communities-heading" style={{ zIndex: 900 }}>
            <h1 className="ifo-white" style={{ fontSize: "60px" }}>{communitiesData.communities.communitiesHeading}</h1>
            <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "60px" }}> {communitiesData.communities.communitiesHeadingHigh}</span>
            <p className="ifo-white">{communitiesData.communities.communitiesDescription}</p>
          </div> */}


        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-communities uk-padding">
            <div style={{ paddingTop: "120px" }}>
              <h1 className="ifo-white">{communitiesData.communities.communitiesHeading}</h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "30px" }}> {communitiesData.communities.communitiesHeadingHigh}</span>
              <p className="ifo-white">{communitiesData.communities.communitiesDescription}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Communities