import React, { Component } from 'react';
import './WorkLife.css'
import communitiesData from '../strings.json'


class WorkLife extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-worklife" data-aos="fade-up">
            <div className="uk-container uk-padding ifo-container">
              <div className="ifo-worklife-heading uk-text-left">
                <h2>{communitiesData.communities.worklife.worklifeHeading} <span className="ifo-about-heading-lorem">{communitiesData.communities.worklife.worklifeHeadingHigh}</span></h2>
                <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
                  <div>
                    <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                      <p className="uk-text-left">{communitiesData.communities.worklife.worklifeDescription1}</p>
                    </div>
                  </div>
                  <div>
                    <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                      {/* <img src="../../assets/Group/CommunityPage/OutPut/workLife.png" data-aos="fade-left"></img> */}
                      <div className="com-img1" data-aos="fade-left">
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-worklife">
            <div className="uk-container uk-padding ifo-container">
              <div className="ifo-worklife-heading uk-text-left">
                <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
                  <div>
                    <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                      <div className="com-img2" data-aos="fade-right">
                      </div>
                      {/* <img src="../../../src/assets/Group/CommunityPage/OutPut/celebration.png" data-aos="fade-right"></img> */}
                    </div>
                  </div>
                  <div>
                    <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                      <p className="uk-text-left">{communitiesData.communities.worklife.worklifeDescription2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-container uk-padding ifo-container">
            <div className="ifo-worklife-heading uk-text-left">
              <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
                <div>
                  <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                    <p className="uk-text-left">{communitiesData.communities.worklife.worklifeDescription3}</p>
                  </div>
                </div>
                <div>
                  <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                    <img src="https://media0.mensxp.com/media/content/2018/Apr/flipkart-has-the-coolest-office-in-india-now3-1523369389.jpg" data-aos="fade-left"></img>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="uk-container uk-padding">
            <h2>{communitiesData.communities.worklife.worklifeHeading} <span className="ifo-about-heading-lorem">{communitiesData.communities.worklife.worklifeHeadingHigh}</span></h2>

            <p className="uk-text-left uk-text-justify">{communitiesData.communities.worklife.worklifeDescription1}</p>
            <p className="uk-text-left uk-text-justify">{communitiesData.communities.worklife.worklifeDescription2}</p>
            <p className="uk-text-left uk-text-justify">{communitiesData.communities.worklife.worklifeDescription3}</p>

          </div>
        </div>

      </div>

    )
  }
}
export default WorkLife 