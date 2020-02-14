import React, { Component } from 'react';
import './Outstaffing.css'
import RedactionComponent from '../redaction/redaction/RedactionComponent'
import outImg from '../../assets/Group/OutStaffing//OutPut/cardin.jpg'
import Back from '../Back';

import driversImg from '../../assets/Group/ICONS/OutstaffingIcon/OutPut/Drivers.png'
import productImg from '../../assets/Group/ICONS/OutstaffingIcon/OutPut/Product.png'
import recruiteImg from '../../assets/Group/ICONS/OutstaffingIcon/OutPut/Recruite.png'
import communicationImg from '../../assets/Group/ICONS/OutstaffingIcon/OutPut/Communication-01.png'

class Outstaffing extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-outstaffing">

            <div class="uk-inline">
              <img src={outImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
              <div class="">
                <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900, marginTop: "50px" }}>
                  <h1 className="ifo-white" style={{ fontSize: "50px" }}>Staffing Through </h1>
                  <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}>Outstaffing</span>
                  <p className="ifo-white">The best platform to outsource you staffing requirements.</p>
                </div>
              </div>
            </div>

            {/* <div className="ifo-communities-heading">
              <h1 className="ifo-black" style={{ fontSize: "50px" }}>Staffing Through </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}>Outstaffing</span>
              <p className="ifo-black">The best platform to outsource you staffing requirements.</p>
            </div> */}
          </div>

          <div className="section-outstaffing-about" style={{ marginTop: "20px" }}>
            <div class="uk-container uk-padding ifo-container">

              <div className="uk-text-center">
                <p>Planning to set up your new team in India? With our outstaffing services, we help you set up the right team exclusively for meeting your business goals. By conducting effective interviews and drives relevant to your niche we entrust you the best recruits available in India. Our outstaffing service also guarantees a fully functional workplace for your teams functioning. Unlike outsourcing, you also have the complete authority over the team. Fulfil your business motives by setting up the right team now.</p>
              </div>
            </div>
          </div>

          <div className="section-redactionWhat">
            <div class="uk-container uk-padding ifo-container">

              <div>
                <div className="uk-text-left">
                  <h2>Why <span className="ifo-about-heading-lorem">Us</span> </h2>
                  <div class="uk-child-width-1-4 uk-text-center" uk-grid="true" style={{ marginTop: "30px" }}>
                    <RedactionComponent redactionImageUrl={driversImg} redactionTitle="Consistent Drives" redactionContent="We conduct recruitment drives relevant to your niche consistently to find the best fit for your requirements. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={recruiteImg} redactionTitle="Reliable Recruits" redactionContent="With our outstaffing services, we entrust you the most reliable recruits in India. The only needful requirement is a detailed description of talent you are looking for.  "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={productImg} redactionTitle="Increased Productivity" redactionContent="Hiring the most reliable and dedicated recruits through our cost-effective outstaffing services, we ensure an increased productivity for your business.  "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={communicationImg} redactionTitle="Easy Communication" redactionContent="Time zone difference can be a hurdle in communications. Well it is not with INFOLKS! We have a 24x7 working team to handle all your needs making your team management easier."></RedactionComponent>


                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-outstaffing">
            <div className="ifo-mobile-team-head uk-padding" style={{ paddingTop: "30%" }}>
              <h1 className="ifo-white" style={{ fontSize: "30px" }}>Staffing Through </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "30px" }}>Outstaffing</span>
              <p className="ifo-white">The best platform to outsource you staffing requirements.</p>
            </div>
          </div>

          <div className="section-mobile-outstaffing-about" style={{ marginTop: "20px" }}>
            <div class="uk-container uk-padding ifo-container">

              <div className="uk-text-justify">
                <p>Planning to set up your new team in India? With our outstaffing services, we help you set up the right team exclusively for meeting your business goals. By conducting effective interviews and drives relevant to your niche we entrust you the best recruits available in India. Our outstaffing service also guarantees a fully functional workplace for your teams functioning. Unlike outsourcing, you also have the complete authority over the team. Fulfil your business motives by setting up the right team now.</p>
              </div>
            </div>
          </div>

          <div className="section-mobile-redactionWhat">
            <div class="uk-container uk-padding ifo-container">

              <div>
                <div className="uk-text-left">
                  <h2>Why <span className="ifo-about-heading-lorem">Us</span> </h2>
                  <div class="uk-text-center" uk-grid="true" style={{ marginTop: "30px" }}>
                    <RedactionComponent redactionImageUrl={driversImg} redactionTitle="Consistent Drives" redactionContent="We conduct recruitment drives relevant to your niche consistently to find the best fit for your requirements. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={recruiteImg} redactionTitle="Reliable Recruits" redactionContent="With our outstaffing services, we entrust you the most reliable recruits in India. The only needful requirement is a detailed description of talent you are looking for.  "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={productImg} redactionTitle="Increased Productivity" redactionContent="Hiring the most reliable and dedicated recruits through our cost-effective outstaffing services, we ensure an increased productivity for your business.  "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={communicationImg} redactionTitle="Easy Communication" redactionContent="Time zone difference can be a hurdle in communications. Well it is not with INFOLKS! We have a 24x7 working team to handle all your needs making your team management easier."></RedactionComponent>


                  </div>
                  <div>
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
export default Outstaffing