import React, { Component } from 'react';
import './Bpo.css'
import bpoImg from '../../assets/Group/BPO/OutPut/BPO.jpg'
import frontImg from '../../assets/Group/BPO/What we offer/Output/FrontOffice.jpg'
import backImg from '../../assets/Group/BPO/What we offer/Output/BackOffice.jpg'
import kowlwdgImg from '../../assets/Group/BPO/What we offer/Output/Knowledg.jpg'
import brandImg from '../../assets/Group/BPO/What we offer/Output/Branding.jpg'

import Back from '../Back';

class Bpo extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-bpo">

            <div class="uk-inline">
              <img src={bpoImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
              <div class="">
                <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900, marginTop: "50px" }}>
                  <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}>BPO Services</span><br></br>
                  <span className="ifo-white" style={{ fontSize: "50px" }}>For Business Agility</span>
                  <p className="ifo-white">Speed up your business growth through our BPO services
</p>
                </div>
              </div>
            </div>

            {/* <div className="ifo-communities-heading">
              <h1 className="ifo-black" style={{ fontSize: "50px" }}>BPO Services For </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}>Business Agility</span>
              <p className="ifo-black">Speed up your business growth through our BPO services.</p>
            </div> */}
          </div>

          <div className="section-bpo-about" style={{ marginTop: "20px", height: "30vh" }} data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div className="uk-text-center">
                <p>Crunching numbers, cold calls and large account databases are some of the secondary hardships that a growing business has to face. Does this slow down your company growth? Speed up your business growth by outsourcing your secondary business needs that setback your business agility. We enable efficient BPO services to support businesses carry out their overburdened business process under any scenario.

</p>
              </div>
            </div>
          </div>

          <div className="section-software-what" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">
              <h2>What We  <span className="ifo-about-heading-lorem">Offer?</span> </h2>

              {/* <div className="section-software-brand">
                <div class="uk-container uk-padding ifo-container">

                  <div className="uk-text-center">
                    <h2>Branding</h2>
                    <p>Build a brand, acquire a recognition, make a positive impact with your clients. We help you design the perfect logo, marketing collateral, stationery and other branding features. Let us together build your <span className="uk-text-bold">BRAND</span> </p>
                  </div>
                </div>
              </div> */}

              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin uk-padding" style={{ boxShadow: 0 }} uk-grid="true">
                <div class="uk-card-media-left uk-cover-container">
                  <img src={frontImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body uk-text-justify" style={{ padding: 0, paddingLeft: "30px" }}>
                    <h3 class="uk-card-title">Front Office Service</h3>
                    <p className="uk-text-justify">We offer front office services for enterprises to meet their customer base requirements so that they always stay top in the market. With our expertise in the industry we provide:</p>
                    <ul>
                      <li>Inbound Services.</li>
                      <li>Outbound Services.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin uk-padding" uk-grid="true" style={{ boxShadow: 0 }}>
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                  <img src={backImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body uk-text-justify" style={{ padding: 0, paddingRight: "30px" }}>
                    <h3 class="uk-card-title">Back Office Services</h3>
                    <p className="uk-text-justify">Businesses comes with unproductive back office works that can slow down the growth of company. We offer efficient back office services by providing services like: </p>
                    <ul>
                      <li>Data management services</li>
                      <li>Accounting services</li>
                      <li>Payroll Computation.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin uk-padding" style={{ boxShadow: 0 }} uk-grid="true">
                <div class="uk-card-media-left uk-cover-container">
                  <img src={kowlwdgImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body uk-text-justify" style={{ padding: 0, paddingLeft: "30px" }}>
                    <h3 class="uk-card-title">Knowledge Process Outsourcing</h3>
                    <p className="uk-text-justify">Got to know your market trend or other business statistics? We give you our R&D specialists to deliver researching and analyzing with the deep-rooted and foremost quality values. We expertise int</p>
                    <ul>
                      <li>Research and analytics</li>
                      <li>Knowledge management</li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-bpo">
            <div className="ifo-mobile-bpo-head uk-padding" style={{ paddingTop: "30%", marginTop: "50px" }}>
              <h1 className="ifo-white" style={{ fontSize: "30px" }}>BPO Services For </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "30px" }}>Business Agility</span>
              <p className="ifo-white">Speed up your business growth through our BPO services.</p>
            </div>
          </div>

          <div className="section-mobile-bpo-about" style={{ marginTop: "20px" }} data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div className="uk-text-justify">
                <p>Crunching numbers, cold calls and large account databases are some of the secondary hardships that a growing business has to face. Does this too slow down your company growth? Speed up your business growth by outsourcing all your secondary business needs to us that setback your business agility. We enable efficient BPO services to support businesses carry out their overburdened business process under any scenario.  </p>
              </div>
            </div>
          </div>

          <div className="section-software-what" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">
              <h2>What We  <span className="ifo-about-heading-lorem">Offer?</span> </h2>

              <div className="section-software-brand">
                <div class="uk-container uk-padding ifo-container">

                  <div className="uk-text-center">
                    <h2>Branding</h2>
                    <p>Build a brand, acquire a recognition, make a positive impact with your clients. We help you design the perfect logo, marketing collateral, stationery and other branding features. Let us together build your <span className="uk-text-bold">BRAND</span> </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin" style={{ boxShadow: 0 }} uk-grid="true">
                <div class="uk-card-media-left uk-cover-container">
                  <img src={frontImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body">
                    <h3 class="uk-card-title">Front Office Service</h3>
                    <p className="uk-text-justify">We offer front office services for enterprises to meet their customer base requirements so that they always stay top in the market. With our expertise in the industry we provide:</p>
                    <ul>
                      <li>Inbound Services.</li>
                      <li>Outbound Services.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true" style={{ boxShadow: 0 }}>
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                  <img src={backImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body">
                    <h3 class="uk-card-title">Back Office Services</h3>
                    <p className="uk-text-justify">Businesses comes with unproductive back office works that can slow down the growth of company. We offer efficient back office services by providing services like: </p>
                    <ul>
                      <li>Data management services</li>
                      <li>Accounting services</li>
                      <li>Payroll Computation.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin" style={{ boxShadow: 0 }} uk-grid="true">
                <div class="uk-card-media-left uk-cover-container">
                  <img src={kowlwdgImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body">
                    <h3 class="uk-card-title">Knowledge Process Outsourcing</h3>
                    <p className="uk-text-justify">Got to know your market trend or other business statistics? We give you our R&D specialists to deliver researching and analyzing with the deep-rooted and foremost quality values. We expertise int</p>
                    <ul>
                      <li>Research and analytics</li>
                      <li>Knowledge management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Back></Back>
      </div>
    )
  }
}

export default Bpo