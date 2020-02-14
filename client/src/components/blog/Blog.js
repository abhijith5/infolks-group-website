import React, { Component } from 'react';
import './Blog.css'

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="section-blog uk-visible@m" data-aos="fade-up">
          <div class="uk-container uk-padding ifo-container">
            <div className="uk-text-center">
              <h2>Community <span className="ifo-about-heading-lorem">Blog</span></h2>
            </div>

            <div>
              <div uk-slider="true">

                <div class="uk-position-relative">

                  <div class="uk-slider-container uk-light">
                    <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@s uk-child-width-1-1@m">
                      <li style={{ width: "100vw", height: "45vh", backgroundColor: "#2D4D9A" }} className="li1">
                        {/* <div class="uk-overlay-primary uk-position-cover"></div> */}

                        <div className="ifo-overflow blog-content uk-text-left uk-padding" style={{ paddingLeft: "5%", paddingTop: "5%", width: "70%", zIndex: "1000" }}>
                          <p style={{ marginBottom: 0 }}>Artificial Intlegence</p>
                          <h3 style={{ marginTop: 0 }}>How Cloud Computing Influences Artificial Intelligence?</h3>
                          <p>From on-premises data centers to cloud, IT operation has evolved exponentially over the last decade with the help of cloud computing services offered by companies such as Amazon...</p>
                          <button className="uk-button uk-button-default ifo-btn">Read More...</button>
                        </div>
                      </li>
                      <li style={{ width: "100vw", height: "40vh", backgroundColor: "#2D4D9A" }}>

                      </li>
                      <li style={{ width: "100vw", height: "40vh", backgroundColor: "#2D4D9A" }}>

                      </li>
                      <li style={{ width: "100vw", height: "40vh", backgroundColor: "#2D4D9A" }}>

                      </li>
                      <li style={{ width: "100vw", height: "40vh", backgroundColor: "#2D4D9A" }}>

                      </li>
                      <li style={{ width: "100vw", height: "40vh", backgroundColor: "#2D4D9A" }}>

                      </li>
                    </ul>
                  </div>

                  <div class="uk-hidden@s uk-light">
                    <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
                  </div>

                  <div class="uk-visible@s">
                    <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                    <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
                  </div>

                </div>

                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

              </div>
            </div>

          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="uk-container uk-padding">
            
          </div>
        </div>

      </div>
    )
  }
}

export default Blog