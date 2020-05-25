import React, { Component } from 'react';
import './AboutIntro.css'
import aboutData from '../strings.json'


class AboutIntro extends Component {
  render() {
    return (
      <div>
        <div className="section uk-visible@m" data-aos="fade-up" >
          <div class="uk-container uk-padding ifo-container">
            <h2>Our Story</h2>
            <div class="uk-child-width-1-2 uk-text-left" uk-grid="true">

              <div>
                <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                  <p>Journey of Infolks began in 2016 as the only image annotation company in the state. The idea of such a venture was formulated by a trio considering their expertise and experience in the niche. Started off with a 7-member team, the first workspace was set up temporarily at the ancestral home of one of the directors. Team strength leveraged quickly over a count of 20+ employees marking the official beginning of Infolks. By the end of 2016, a team of qualified annotators were moulded and the team was still counting. When the team count exceeded a count of 70 we shifted our workspace from the ancestral home to our well set up office structure. </p>
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                  <div className="com-img2" data-aos="fade-right">
                  </div>
                  {/* <img src="../../../src/assets/Group/CommunityPage/OutPut/celebration.png" data-aos="fade-right"></img> */}
                </div>
              </div>
            </div>
            <div class="uk-child-width-1-2 uk-text-left" uk-grid="true">
              <div>
                <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                  <div className="com-img2" data-aos="fade-right">
                  </div>
                  {/* <img src="../../../src/assets/Group/CommunityPage/OutPut/celebration.png" data-aos="fade-right"></img> */}
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                  <p>As time went on more young workforce kept on joining our cause and within a span of 1 year we could expand our team to a count of 150+ employees. By the time, our qualified annotators were not only well versed in image annotation but also in other data labelling services. This was the moment for us to think something big and diverse and decided to enable multiple outsourcing services. By the end of 3rd successful year we extended our workspace including more infrastructure. Today Infolks is an ISO certified company outsourcing services with a team of around 250 employees. Data labelling and outstaffing are our featured services. So far we have worked with numerous Fortune 10 and Fortune 100 companies.<span style={{ fontWeight: "600" }}>CONTINENTAL AG</span> is one of the recent additions in our list. We have collaborated with them to set up a fully functional <span style={{ fontWeight: "600" }}>Offshore Dedicated Center.</span></p>
                </div>
              </div>
            </div>
            {/* <div className="uk-text-center">
              <p>{aboutData.about.aboutDescription1}</p>
              <p>{aboutData.about.aboutDescription2}</p>

            </div> */}
          </div>
        </div>

        <div className="section-mobile-aboutintro uk-hidden@m" data-aos="fade-up" >
          <div class="uk-container uk-padding ifo-container">
            <div className="uk-text-center uk-text-justify">
              <p>{aboutData.about.aboutDescription1}</p>
              <p>{aboutData.about.aboutDescription2}</p>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default AboutIntro