import React, { Component } from 'react';
import './Services.css'
import ServiceComponent from './serviceComponent/ServiceComponent';
import ServiceMComponent from './serviceMobileComponent/ServiceMComponent';
import homeServiceData from '../strings.json'

import annotation from '../../assets/Group/ICONS/OurService/OutPut/Annotation.png'
import software from '../../assets/Group/ICONS/OurService/OutPut/Software.png'
import bpo from '../../assets/Group/ICONS/OurService/OutPut/BPO.png'
import readaction from '../../assets/Group/ICONS/OurService/OutPut/Redaction.png'
import outstaffing from '../../assets/Group/ICONS/OurService/OutPut/OutSource.png'


class Services extends Component {
  render() {
    return (
      <div>
        <div className="section-service uk-visible@m" data-aos="fade-up">
          <div class="uk-container uk-padding ifo-container">
            <h2> {homeServiceData.home.homeOurServices.homeOurServicesHeading}
              <span className="ifo-about-heading-lorem" style={{ marginLeft: "5px" }}> {homeServiceData.home.homeOurServices.homeOurServicesHeadingHigh}</span>
            </h2>
            {/* <p> {homeServiceData.home.homeOurServices.homeOurServicesShortDescription}</p> */}
            <div className="ifo-services-card  uk-padding">
              <div class="uk-child-width-1-5 uk-text-center" uk-grid="true">
                <ServiceComponent
                  serviceImageUrl={annotation}
                  seviceImageName={homeServiceData.home.homeOurServices.homeOurServices1.serviceImageName}>

                </ServiceComponent>
                <ServiceComponent
                  serviceImageUrl={software}
                  seviceImageName={homeServiceData.home.homeOurServices.homeOurServices2.serviceImageName}
                  serviceUrl="software">
                </ServiceComponent>
                <ServiceComponent
                  serviceImageUrl={bpo}
                  seviceImageName={homeServiceData.home.homeOurServices.homeOurServices3.serviceImageName}
                  serviceUrl="bpo"
                >
                </ServiceComponent>
                <ServiceComponent
                  serviceImageUrl={readaction}
                  seviceImageName={homeServiceData.home.homeOurServices.homeOurServices4.serviceImageName}
                  serviceUrl="redaction"
                >
                </ServiceComponent>
                <ServiceComponent
                  serviceImageUrl={outstaffing}
                  seviceImageName={homeServiceData.home.homeOurServices.homeOurServices5.serviceImageName}
                  serviceUrl="outstaffing"
                >
                </ServiceComponent>

              </div>
            </div>
          </div>
        </div>

        <div className="section-mobile uk-hidden@m" data-aos="fade-up">
          <div className="uk-container uk-padding">
            <h2> {homeServiceData.home.homeOurServices.homeOurServicesHeading}
              <span className="ifo-about-heading-lorem"> {homeServiceData.home.homeOurServices.homeOurServicesHeadingHigh}</span>
            </h2>
            <p> {homeServiceData.home.homeOurServices.homeOurServicesShortDescription}</p>
            <div className="ifo-mobile-card">
              <ServiceMComponent
                serviceImageUrl={annotation}
                seviceImageName={homeServiceData.home.homeOurServices.homeOurServices1.serviceImageName}>
              </ServiceMComponent>
              <ServiceMComponent
                serviceImageUrl={software}
                seviceImageName={homeServiceData.home.homeOurServices.homeOurServices2.serviceImageName}>
              </ServiceMComponent>
              <ServiceMComponent
                serviceImageUrl={bpo}
                seviceImageName={homeServiceData.home.homeOurServices.homeOurServices3.serviceImageName}>
              </ServiceMComponent>
              <ServiceMComponent
                serviceImageUrl={readaction}
                seviceImageName={homeServiceData.home.homeOurServices.homeOurServices4.serviceImageName}>
              </ServiceMComponent>
              <ServiceMComponent
                serviceImageUrl={outstaffing}
                seviceImageName={homeServiceData.home.homeOurServices.homeOurServices5.serviceImageName}>
              </ServiceMComponent>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Services