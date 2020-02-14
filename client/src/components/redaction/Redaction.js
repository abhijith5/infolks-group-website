import React, { Component } from 'react';
import './Redaction.css'
import RedactionComponent from './redaction/RedactionComponent';
import redactionImg from '../../assets/Group/Redaction/OutPut/Redaction.jpg'

import choiceImg from '../../assets/Group/WhyUS/OutPuts/Icons/Choice.png'
import lessImg from '../../assets/Group/WhyUS/OutPuts/Icons/LessComplex.png'
import secureImg from '../../assets/Group/WhyUS/OutPuts/Icons/Secure.png'
import pricingImg from '../../assets/Group/WhyUS/OutPuts/Icons/Pricing.png'
import qualityImg from '../../assets/Group/WhyUS/OutPuts/Icons/Quality.png'

import textImg from '../../assets/Group/WhatIsRedaction/OutPut/TextRedaction.jpg'
import videoImg from '../../assets/Group/WhatIsRedaction/OutPut/VideoRedaction.jpg'
import redImg from '../../assets/Group/WhatIsRedaction/OutPut/redaction.jpg'
import Back from '../Back';


class Redaction extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-redaction">

            <div class="uk-inline">
              <img src={redactionImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
              <div class="">
                <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900, marginTop: "50px" }}>
                  <h1 className="ifo-white" style={{ fontSize: "50px" }}>Data Redaction For </h1>
                  <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}> Enhanced Security</span>
                  <p className="ifo-white">Worried about your privacy? Never again!</p>
                  <p className="ifo-white">We help you protect it through our secure redaction.</p>
                </div>
              </div>
            </div>

            {/* <div className="ifo-communities-heading">
              <h1 className="ifo-white" style={{ fontSize: "50px" }}>Data Redaction For </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}> Enhanced Security</span>
              <p className="ifo-white">Worried about your privacy? Never again!</p>
              <p className="ifo-white">We help you protect it through our secure redaction.</p>

            </div> */}
          </div>

          <div className="section-redactionAbout" style={{ marginTop: "20px" }} data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div className="uk-text-center">
                <p>Nothing is more valuable than a perfect data and it means a lot to us. Data can contain a wide range of information and what happens if such information is acquired by untrusted third parties? There are plenty of resources that cite to these information and prevention of its misuse can be difficult. One possible way to get protected is to hide it from them. And it is this for what we are here. Our secure redaction services helps you successfully obscure any sensitive information contained within the data. </p>
              </div>
            </div>
          </div>

          <div className="section-redactionWhat" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div>
                <div className="uk-text-left">
                  <h2>What we <span className="ifo-about-heading-lorem">Redact</span> </h2>
                  <div class="uk-child-width-1-3 uk-text-center" uk-grid="true" style={{ marginTop: "30px" }}>
                    <RedactionComponent redactionImageUrl={textImg} redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={redImg} redactionTitle="Image Redaction" redactionContent="We redact sections of images containing valuable information. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={videoImg} redactionTitle="Video Redaction" redactionContent="We redact parts of video footage. CCTV footage is a common use case. "></RedactionComponent>


                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-redactionWhy" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div>
                <div className="uk-text-left">
                  <h2>Why <span className="ifo-about-heading-lorem">Us</span> </h2>
                  <div class="uk-child-width-1-3 uk-text-center" uk-grid="true" style={{ marginTop: "30px" }}>
                    <RedactionComponent redactionImageUrl={secureImg} redactionTitle="Secure Platform" redactionContent="INFOLKS is one of the most secure redaction platforms available in the market. ISO 27001:2013 certification along with compatibility of systems with GDPR standards are the prime attractions of our services. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={choiceImg} redactionTitle="Varied Choices" redactionContent="With INFOLKS you can avail a wide variety of redaction services based on your requirement. Be it any type of data, we are always there to safeguard your privacy. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={qualityImg} redactionTitle="Fine Quality" redactionContent="Quality is the cornerstone attribute of our redaction services. Our quality enhancement mechanism ensures you the best quality redaction and privacy protection."></RedactionComponent>
                    <RedactionComponent redactionImageUrl={pricingImg} redactionTitle="Pricing" redactionContent="Services at INFOLKS are always reasonable and the lowest in the market. No matter what the services are, we provide quality and cost-effective support."></RedactionComponent>
                    <RedactionComponent redactionImageUrl={lessImg} redactionTitle="Less Complexity" redactionContent="Finally have got something to redact. Get connected to us without any complex procedures. Simply mail us your requirements and get your needs done. Contact Us for enabling your protection now."></RedactionComponent>
                    {/* <RedactionComponent redactionImageUrl="http://www.myiconfinder.com/uploads/iconsets/53d5151ca4f467ed9951f85024881c85.png" redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent>
                  <RedactionComponent redactionImageUrl="http://www.myiconfinder.com/uploads/iconsets/53d5151ca4f467ed9951f85024881c85.png" redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent>
                  <RedactionComponent redactionImageUrl="http://www.myiconfinder.com/uploads/iconsets/53d5151ca4f467ed9951f85024881c85.png" redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent> */}


                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-redaction">
            <div className="ifo-mobile-redaction-head uk-padding" style={{ paddingTop: "30%" }}>
              <h1 className="ifo-white" style={{ fontSize: "30px" }}>Data Redaction For </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "30px" }}> Enhanced Security</span>
              <p className="ifo-white">Worried about your privacy? Never again!</p>
              <p className="ifo-white">We help you protect it through our secure redaction.</p>
            </div>
          </div>

          <div className="section-mobile-redactionAbout" style={{ marginTop: "20px" }} data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div className="uk-text-justify">
                <p>Nothing is more valuable than a perfect data and it means a lot to us. Data can contain a wide range of information and what happens if such information is acquired by untrusted third parties? There are plenty of resources that cite to these information and prevention of its misuse can be difficult. One possible way to get protected is to hide it from them. And it is this for what we are here. Our secure redaction services helps you successfully obscure any sensitive information contained within the data. </p>
              </div>
            </div>
          </div>


          <div className="section-redactionWhat" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div>
                <div className="uk-text-left">
                  <h2>What we <span className="ifo-about-heading-lorem">Redact</span> </h2>
                  <div class="uk-text-center" style={{ marginTop: "30px" }}>
                    <RedactionComponent redactionImageUrl={textImg} redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={redImg} redactionTitle="Image Redaction" redactionContent="We redact sections of images containing valuable information. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={videoImg} redactionTitle="Video Redaction" redactionContent="We redact parts of video footage. CCTV footage is a common use case. "></RedactionComponent>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-redactionWhy" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div>
                <div className="uk-text-left">
                  <h2>Why <span className="ifo-about-heading-lorem">Us</span> </h2>
                  <div class="uk-text-center" uk-grid="true" style={{ marginTop: "30px" }}>
                    <RedactionComponent redactionImageUrl={secureImg} redactionTitle="Secure Platform" redactionContent="INFOLKS is one of the most secure redaction platforms available in the market. ISO 27001:2013 certification along with compatibility of systems with GDPR standards are the prime attractions of our services. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={choiceImg} redactionTitle="Varied Choices" redactionContent="With INFOLKS you can avail a wide variety of redaction services based on your requirement. Be it any type of data, we are always there to safeguard your privacy. "></RedactionComponent>
                    <RedactionComponent redactionImageUrl={qualityImg} redactionTitle="Fine Quality" redactionContent="Quality is the cornerstone attribute of our redaction services. Our quality enhancement mechanism ensures you the best quality redaction and privacy protection."></RedactionComponent>
                    <RedactionComponent redactionImageUrl={pricingImg} redactionTitle="Pricing" redactionContent="Services at INFOLKS are always reasonable and the lowest in the market. No matter what the services are, we provide quality and cost-effective support."></RedactionComponent>
                    <RedactionComponent redactionImageUrl={lessImg} redactionTitle="Less Complexity" redactionContent="Finally have got something to redact. Get connected to us without any complex procedures. Simply mail us your requirements and get your needs done. Contact Us for enabling your protection now."></RedactionComponent>
                    {/* <RedactionComponent redactionImageUrl="http://www.myiconfinder.com/uploads/iconsets/53d5151ca4f467ed9951f85024881c85.png" redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent>
                  <RedactionComponent redactionImageUrl="http://www.myiconfinder.com/uploads/iconsets/53d5151ca4f467ed9951f85024881c85.png" redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent>
                  <RedactionComponent redactionImageUrl="http://www.myiconfinder.com/uploads/iconsets/53d5151ca4f467ed9951f85024881c85.png" redactionTitle="Text Redaction" redactionContent="We redact sensitive texts contained in PDFs and other forms of documents. "></RedactionComponent> */}


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

export default Redaction