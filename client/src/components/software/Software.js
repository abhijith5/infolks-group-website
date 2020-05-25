import React, { Component } from 'react';
import './Software.css'
import OurTeamComponent from '../our-team/ourTeamComponent/OurTeamComponent';
import OurTeamMComponent from '../our-team/ourTeamMComponenet/OurTeamMComponent';

import softwareImg from '../../assets/Group/Software/OutPut/Software.jpg'

import androidImg from '../../assets/Group/Software/Software/OutPut/Android  App.jpg'
import seoImg from '../../assets/Group/Software/Software/OutPut/SEO.jpg'
import webImg from '../../assets/Group/Software/Software/OutPut/WebDevelopment.jpg'
import webERPImg from '../../assets/Group/Software/Software/OutPut/WebBasedERP.jpg'

import Back from '../Back';

class Software extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-software">

            <div class="uk-inline">
              <img src={softwareImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
              <div class="">
                <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900, marginTop: "50px" }}>

                  <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}>Software Solutions</span><br></br>
                  <span className="ifo-white" style={{ fontSize: "50px" }} >for Advanced Business Applications </span>

                  <p className="ifo-white">Develop perfect business interfaces using advanced technologies.
</p>
                </div>
              </div>
            </div>


            {/* <div className="ifo-communities-heading">
              <h1 className="ifo-white" style={{ fontSize: "50px" }}>SOFTWARE </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px" }}> SOLUTIONS</span>
              <p className="ifo-white">Advance your business with our IT solutions.</p>
            </div> */}
          </div>

          <div className="section-software-about" data-aos="fade-up">
            <div className="uk-container uk-padding ifo-container">

              <div className="uk-text-center">
                <p>Our software solutions are developed by an experienced team having immense niche expertise and knowledge in latest technologies. We provide world‑class services in web designing and android/software development, offering a fully-optimized solution for all your software and digital marketing needs.</p>
              </div>
            </div>
          </div>
{/* 
          <div className="section-software-lead" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <h2>Our <span className="ifo-about-heading-lorem">Developers</span> </h2>

              <div class="uk-child-width-1-3 uk-text-center" uk-grid="true" style={{ marginTop: "30px" }}>
                <div>
                  <OurTeamComponent teamImagePosition="CEO & Founder" teamImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQMMDCqnwgaqQkH-tHITuEqjl58tSKT3rNs7dsiZ-Cj4rixs5jQ">Mr. Mujeeb Kollassery</OurTeamComponent>
                </div>
                <div>
                  <OurTeamComponent teamImagePosition="CEO & Founder" teamImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQMMDCqnwgaqQkH-tHITuEqjl58tSKT3rNs7dsiZ-Cj4rixs5jQ">Mr. Mujeeb Kollassery</OurTeamComponent>
                </div>
                <div>
                  <OurTeamComponent teamImagePosition="CEO & Founder" teamImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQMMDCqnwgaqQkH-tHITuEqjl58tSKT3rNs7dsiZ-Cj4rixs5jQ">Mr. Mujeeb Kollassery</OurTeamComponent>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section-software-what" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">
              <h2>What We  <span className="ifo-about-heading-lorem">Offer?</span> </h2>

              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin uk-padding" uk-grid="true" style={{ boxShadow: 0 }}>
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                  <img src={webERPImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body uk-text-justify" style={{ padding: 0, paddingRight: "30px" }}>
                    <h3 class="uk-card-title">Web Devlelopment</h3>
                    <p>It takes effort and expertise to deliver impeccable web applications. We are a renowned offshore web development company, obliged in magnificent web development services. Bestowed with the most satisfactory outcomes we make sure that your web application will be exactly the same that you were looking for.</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin  uk-padding" style={{ boxShadow: 0 }} uk-grid="true">
                <div class="uk-card-media-left uk-cover-container">
                  <img src={webImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body uk-text-justify" style={{ padding: 0, paddingLeft: "30px" }}>
                    <h3 class="uk-card-title">Web Based ERP</h3>
                    <p className="uk-text-justify">We help you develop an accurate web based ERP that helps to improve the responsiveness of business according to changing demands of the market. Our solutions are more flexible and reliable such that it helps us to create an ambitious advantage to your business by boosting your business performance and efficiency.
</p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin uk-padding" uk-grid="true" style={{ boxShadow: 0 }}>
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                  <img src={androidImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body uk-text-justify" style={{ padding: 0, paddingRight: "30px" }}>
                    <h3 class="uk-card-title">Android App Development</h3>
                    <p>With innovative ideas and capability to build scalable and high performing apps, we help you reach the market quickly and achieve goals. We have the best creative and experienced tech nerds. Our capability to use ground breaking tools, research practice and forward-thinking attitude ensure that every app we develop delivers a unique experience to our clients.
</p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin uk-padding" style={{ boxShadow: 0 }} uk-grid="true">
                <div class="uk-card-media-left uk-cover-container">
                  <img src={seoImg} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div class="uk-card-body uk-text-justify" style={{ padding: 0, paddingLeft: "30px" }}>
                    <h3 class="uk-card-title">Search Engine Optimization(SEO)</h3>
                    <p className="uk-text-justify">With our SEO services, optimize your content with the perfect keyword that relates to your industry. With our unique optimization techniques and strategies, we help your content achieve a better Search Engine Page Ranking (SERP). After all, better ranking helps your business to reach clients easily and grow up to the limits of sky. Share your targets with our SEO experts and let your content reach the right audience.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-software">
            <div className="ifo-mobile-team-head uk-padding" style={{ paddingTop: "30%" }}>
              <h1 className="ifo-white" style={{ fontSize: "40px" }}>SOFTWARE </h1>
              <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "40px" }}> SOLUTIONS</span>
              <p className="ifo-white">Advance your business with our IT solutions.</p>
            </div>
          </div>
          <div className="section-software-about" data-aos="fade-up">
            <div class="uk-container uk-padding ifo-container">

              <div className="uk-text-center uk-text-justify">
                <p>Infolks is a global software development company with immense niche expertise and focus on the latest technologies. We provide world‑class services through our reliable, and trusted team specialized in web designing and android/software development offering a fully-optimized solution for all your software and digital marketing needs.</p>
              </div>
            </div>
          </div>

          <div className="section-mobile-software-lead" data-aos="fade-up" style={{ marginTop: "50px" }}>
            <div className="uk-container uk-padding uk-text-center">
              <h2>Our <span className="ifo-about-heading-lorem">Developers</span> </h2>
              <div className="" style={{ paddingLeft: "25px" }}>
                <OurTeamMComponent teamImagePosition="CEO & Founder" teamImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQMMDCqnwgaqQkH-tHITuEqjl58tSKT3rNs7dsiZ-Cj4rixs5jQ">Mr. Mujeeb Kollassery</OurTeamMComponent>
                <OurTeamMComponent teamImagePosition="CEO & Founder" teamImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQMMDCqnwgaqQkH-tHITuEqjl58tSKT3rNs7dsiZ-Cj4rixs5jQ">Mr. Mujeeb Kollassery</OurTeamMComponent>
                <OurTeamMComponent teamImagePosition="CEO & Founder" teamImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQMMDCqnwgaqQkH-tHITuEqjl58tSKT3rNs7dsiZ-Cj4rixs5jQ">Mr. Mujeeb Kollassery</OurTeamMComponent>

              </div>
            </div>
          </div>

          <div>
            <div className="section-software-what" data-aos="fade-up">
              <div class="uk-container uk-padding ifo-container">
                <h2>What We  <span className="ifo-about-heading-lorem">Offer?</span> </h2>
                <div class="uk-grid-collapse uk-child-width-1-2@s uk-margin" style={{ boxShadow: 0 }} uk-grid="true">
                  <div class="uk-card-media-left uk-cover-container">
                    <img src={webERPImg} alt="" uk-cover="true" />
                    <canvas width="600" height="400"></canvas>
                  </div>
                  <div>
                    <div class="uk-card-body" style={{ padding: 0, marginTop: "20px" }}>
                      <h3 class="uk-card-title">Web Based ERP</h3>
                      <p className="uk-text-justify">We help you develop the accurate web based ERP software that helps to improve the responsiveness of the business to changing demands of the market. Our solutions are more flexible and reliable such that it help us to create ambitious advantage to your business by boosting your business performance and efficiency.</p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true" style={{ boxShadow: 0 }}>
                  <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src={webImg} alt="" uk-cover="true" />
                    <canvas width="600" height="400"></canvas>
                  </div>
                  <div>
                    <div class="uk-card-body" style={{ padding: 0, marginTop: "20px" }}>
                      <h3 class="uk-card-title">Web Devlelopment</h3>
                      <p>It takes effort and expertise to deliver impeccable web applications. Infolks technologies is a renowned offshore web development company, obliged in magnificent web development services. Bestowed with the most satisfactory outcomes we make sure that your web application will be exactly the same that you were looking for. </p>
                    </div>
                  </div>
                </div>


                <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true" style={{ boxShadow: 0 }}>
                  <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src={androidImg} alt="" uk-cover="true" />
                    <canvas width="600" height="400"></canvas>
                  </div>
                  <div>
                    <div class="uk-card-body" style={{ padding: 0, marginTop: "20px" }}>
                      <h3 class="uk-card-title">Android App Development</h3>
                      <p>With innovative ideas and capability to build scalable and high performing apps, we help you to reach market quickly and achieve goals. We have the best creative and experienced tech nerds. Our capability to use ground breaking tools, through research practice and forward-thinking attitude ensure that every app we develop delivers a unique experience with our clients.</p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" class="uk-grid-collapse uk-child-width-1-2@s uk-margin" style={{ boxShadow: 0 }} uk-grid="true">

                  <div class="uk-card-media-left uk-cover-container">
                    <img src={seoImg} alt="" uk-cover="true" />
                    <canvas width="600" height="400"></canvas>
                  </div>
                  <div>
                    <div class="uk-card-body" style={{ padding: 0, marginTop: "20px" }}>
                      <h3 class="uk-card-title">Search Engine Optimization(SEO)</h3>
                      <p className="uk-text-justify">Optimize your content with the best and most competing keywords through our SEO services. With our unique optimization techniques and strategies, we help your content achieve a better Search Engine Page Ranking (SERP). After all, better ranking helps your business to reach clients easily and grow up to the limits of sky. Share your needs with our SEO experts now and give your content the best exposure. </p>
                    </div>
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
export default Software