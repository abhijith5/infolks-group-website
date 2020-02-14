import React, { Component } from 'react';
import './Career.css'
import OpeningComponent from './openingComponenet/OpeningComponent';
import OpeningMComponent from './openingMComponent/OpeningMComponent';
import careerData from '../strings.json'
import careerImg from '../../assets/Group/Career/OutPut/Career.jpg'
import Back from '../Back';

class Career extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-career">

            <div class="uk-inline">
              <img src={careerImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
              <div class="">
                <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900, marginTop: "50px" }}>
                  <h1 className="ifo-white" style={{ fontSize: "50px" }}>{careerData.career.careerHeading}</h1>
                  <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}> {careerData.career.careerHeadingHigh}</span>
                  <p className="ifo-white">{careerData.career.careerShortDescription}</p>
                </div>
              </div>
            </div>

            {/* <div className="ifo-communities-heading">
              <h1 className="ifo-white" style={{ fontSize: "50px" }}>{careerData.career.careerHeading}</h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}> {careerData.career.careerHeadingHigh}</span>
              <p className="ifo-white">{careerData.career.careerShortDescription}</p>
            </div> */}
          </div>

          <div className="section-career-about" data-aos="fade-up">
            <div className="uk-container uk-padding ifo-container">
              <div className="uk-text-left">
                <p>{careerData.career.careerDescription}</p>
              </div>
            </div>
          </div>

          <div className="section-career-opening" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">
              <div className="uk-text-left">
                <h2>Current Opening</h2>
                <hr></hr>
                <OpeningComponent
                  openHead={careerData.career.opening1.openingHeading}
                  openShortDesc={careerData.career.opening1.openingShortDescription}
                  openDescription={careerData.career.opening1.openingDescription}
                  openQualification={careerData.career.opening1.openingQualification}
                  openSkill={careerData.career.opening1.openingSkill}
                  openExp={careerData.career.opening1.openingExp}>
                </OpeningComponent>
                <OpeningComponent
                  openHead={careerData.career.opening2.openingHeading}
                  openShortDesc={careerData.career.opening2.openingShortDescription}
                  openDescription={careerData.career.opening2.openingDescription}
                  openQualification={careerData.career.opening2.openingQualification}
                  openSkill={careerData.career.opening2.openingSkill}
                  openExp={careerData.career.opening2.openingExp}>
                </OpeningComponent>
                <OpeningComponent
                  openHead={careerData.career.opening3.openingHeading}
                  openShortDesc={careerData.career.opening3.openingShortDescription}
                  openDescription={careerData.career.opening3.openingDescription}
                  openQualification={careerData.career.opening3.openingQualification}
                  openSkill={careerData.career.opening3.openingSkill}
                  openExp={careerData.career.opening3.openingExp}>
                </OpeningComponent>
                <OpeningComponent
                  openHead={careerData.career.opening4.openingHeading}
                  openShortDesc={careerData.career.opening4.openingShortDescription}
                  openDescription={careerData.career.opening4.openingDescription}
                  openQualification={careerData.career.opening4.openingQualification}
                  openSkill={careerData.career.opening4.openingSkill}
                  openExp={careerData.career.opening4.openingExp}>
                </OpeningComponent>
                <OpeningComponent
                  openHead={careerData.career.opening5.openingHeading}
                  openShortDesc={careerData.career.opening5.openingShortDescription}
                  openDescription={careerData.career.opening5.openingDescription}
                  openQualification={careerData.career.opening5.openingQualification}
                  openSkill={careerData.career.opening5.openingSkill}
                  openExp={careerData.career.opening5.openingExp}>
                </OpeningComponent>
                <OpeningComponent
                  openHead={careerData.career.opening6.openingHeading}
                  openShortDesc={careerData.career.opening6.openingShortDescription}
                  openDescription={careerData.career.opening6.openingDescription}
                  openQualification={careerData.career.opening6.openingQualification}
                  openSkill={careerData.career.opening6.openingSkill}
                  openExp={careerData.career.opening6.openingExp}>
                </OpeningComponent>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-career">
            <div className="ifo-mobile-team-head uk-padding" style={{ paddingTop: "30%" }}>
              <h1 className="ifo-white" style={{ fontSize: "40px" }}>{careerData.career.careerHeading}</h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "40px" }}> {careerData.career.careerHeadingHigh}</span>
              <p className="ifo-white">{careerData.career.careerShortDescription}</p>
            </div>
          </div>

          <div className="section-mobile-career-about" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">
              <div className="uk-text-justify">
                <p>{careerData.career.careerDescription}</p>
              </div>
            </div>
          </div>

          <div className="section-career-opening" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">
              <div className="uk-text-left">
                <h2>Current Opening</h2>
                <hr></hr>
                <OpeningMComponent
                  openHead={careerData.career.opening1.openingHeading}
                  openShortDesc={careerData.career.opening1.openingShortDescription}
                  openDescription={careerData.career.opening1.openingDescription}
                  openQualification={careerData.career.opening1.openingQualification}
                  openSkill={careerData.career.opening1.openingSkill}
                  openExp={careerData.career.opening1.openingExp}>
                </OpeningMComponent>
                <OpeningMComponent
                  openHead={careerData.career.opening2.openingHeading}
                  openShortDesc={careerData.career.opening2.openingShortDescription}
                  openDescription={careerData.career.opening2.openingDescription}
                  openQualification={careerData.career.opening2.openingQualification}
                  openSkill={careerData.career.opening2.openingSkill}
                  openExp={careerData.career.opening2.openingExp}>
                </OpeningMComponent>
                <OpeningMComponent
                  openHead={careerData.career.opening3.openingHeading}
                  openShortDesc={careerData.career.opening3.openingShortDescription}
                  openDescription={careerData.career.opening3.openingDescription}
                  openQualification={careerData.career.opening3.openingQualification}
                  openSkill={careerData.career.opening3.openingSkill}
                  openExp={careerData.career.opening3.openingExp}>
                </OpeningMComponent>
                <OpeningMComponent
                  openHead={careerData.career.opening4.openingHeading}
                  openShortDesc={careerData.career.opening4.openingShortDescription}
                  openDescription={careerData.career.opening4.openingDescription}
                  openQualification={careerData.career.opening4.openingQualification}
                  openSkill={careerData.career.opening4.openingSkill}
                  openExp={careerData.career.opening4.openingExp}>
                </OpeningMComponent>
                <OpeningMComponent
                  openHead={careerData.career.opening5.openingHeading}
                  openShortDesc={careerData.career.opening5.openingShortDescription}
                  openDescription={careerData.career.opening5.openingDescription}
                  openQualification={careerData.career.opening5.openingQualification}
                  openSkill={careerData.career.opening5.openingSkill}
                  openExp={careerData.career.opening5.openingExp}>
                </OpeningMComponent>
                <OpeningMComponent
                  openHead={careerData.career.opening6.openingHeading}
                  openShortDesc={careerData.career.opening6.openingShortDescription}
                  openDescription={careerData.career.opening6.openingDescription}
                  openQualification={careerData.career.opening6.openingQualification}
                  openSkill={careerData.career.opening6.openingSkill}
                  openExp={careerData.career.opening6.openingExp}>
                </OpeningMComponent>

              </div>
            </div>
          </div>

        </div>
        <Back></Back>
      </div >
    )
  }
}
export default Career