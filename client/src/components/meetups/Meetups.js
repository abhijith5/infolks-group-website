import React, { Component } from 'react';
import './Meetups.css'
import communitiesData from '../strings.json'
import meet1 from '../../assets/meet1.png'
import meet2 from '../../assets/meet2.png'
import meet3 from '../../assets/meet3.png'


class Meetups extends Component {
  render() {
    return (
      <div>
        <div className="section uk-visible@m" data-aos="fade-up">
          <div className="uk-container uk-padding ifo-container">
            <div className="uk-text-center">
              <h2>{communitiesData.communities.meetups.meetupsHeading}</h2>
            </div>
            <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
              <div style={{ width: "60%" }}>
                <div class="uk-card uk-card-default uk-card-body meetup-bg meet1" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left " >
                    <p className="ifo-white" style={{ margin: 0 }}>Oct 2018</p>
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">NASSCOM product conclave </h3>
                    <button className="uk-button uk-button-default ifo-white" type="button" uk-toggle="target: #modal-close-outside">Know More..</button>
                    <div id="modal-close-outside" uk-modal="true">
                      <div class="uk-modal-dialog uk-modal-body">
                        <button class="uk-modal-close-outside" type="button" uk-close="true"></button>
                        {/* <h2 class="uk-modal-title">Outside</h2> */}
                        <img src={meet1}></img>
                        <p>It is an era of digital transformation, and it is a critical time to improve and update the growth of products on different platforms. As a step to technology renaissance, NPC commemorates its 15th anniversary in 2018. Therefore, the key focus of NASSCOM product conclave 25th-26th Oct 2018 was <span style={{ fontWeight: "600" }}>"Product Mission 2020: Are We Ready?"</span>
                        Several leaders and speakers attended the program and showed us the path to how to dream bigger and what pitfalls to avoid and truly build revolutionary high growth products. It provides a platform for speakers, entrepreneurs, CXOs, investors and consumers to meet and share their views, develop their business, showcase their products, learn from each other, interact with their peers and get motivated by the experts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "40%", paddingLeft: "10px" }} >
                <div class="uk-card uk-card-default uk-card-body meetup-bg meet2" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left">
                    <p></p>
                    {/* <p className="ifo-white" style={{ margin: 0 }}>{communitiesData.communities.meetups.meetups1.meetupsDate}</p> */}
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">Connected Vehicle 2019</h3>
                    <button className="uk-button uk-button-default ifo-white" type="button" uk-toggle="target: #modal-close-outside1">Know More..</button>
                    <div id="modal-close-outside1" uk-modal="true">
                      <div class="uk-modal-dialog uk-modal-body">
                        <button class="uk-modal-close-outside" type="button" uk-close="true"></button>
                        {/* <h2 class="uk-modal-title">Outside</h2> */}
                        <img src={meet2}></img>
                        <p>Connected Vehicle 2019  on 6th-7thMarch at Radisson Blu, Bengaluru organised by  Telematics Wire Pvt Ltd.It creates a highly interactive, knowledge-sharing and networking platform for the connected vehicle ecosystem, Connected Vehicle 2019 drive new business opportunities and foster innovation by bringing all the Stakeholders from across the connected & autonomous car development value chain under one roof.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ width: "50%" }}>
                <div class="uk-card uk-card-default uk-card-body meetup-bg meet3" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left">
                    <p></p>
                    {/* <p className="ifo-white" style={{ margin: 0 }}>{communitiesData.communities.meetups.meetups1.meetupsDate}</p> */}
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">ODSC INDIA 2020</h3>
                    <button className="uk-button uk-button-default ifo-white" type="button" uk-toggle="target: #modal-close-outside2">Know More..</button>
                    <div id="modal-close-outside2" uk-modal="true">
                      <div class="uk-modal-dialog uk-modal-body">
                        <button class="uk-modal-close-outside" type="button" uk-close="true"></button>
                        {/* <h2 class="uk-modal-title">Outside</h2> */}
                        <img src={meet3}></img>
                        <p>Open Data Science Conference(ODSC) India conducted on Sept 9th – 12nd Bengaluru at Sheraton Bangalore hotel, is one of the biggest applied data science and AI conferences focused on impactful tools and leading industry practices. Many entrepreneurs and business heads attended the program. core contributors to many open source products used by data scientists all over the world are the main speakers. They discussed the latest technology trends, tools, and best practices from leading data science experts.

                        ODSC was a great opportunity for us, where we meet several businesses leads and many competitors.Time spending with deputy GM of Mindy support Olga Rotanenko was really informative and interesting.
</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div style={{ width: "50%", paddingLeft: "10px" }}>
                <div class="uk-card uk-card-default uk-card-body meetup-bg" style={{ backgroundColor: "#2D4D9A", color: "#fff" }}>
                  <div className="meetups-content uk-text-left">
                    {/* <p className="ifo-white" style={{ margin: 0 }}>{communitiesData.communities.meetups.meetups1.meetupsDate}</p>
                    <h3 style={{ margin: 0, marginBottom: "15px" }} className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                    <button className="uk-button uk-button-default ifo-white">Know More..</button> */}
                    <h1 style={{ color: "white" }}>Comming soon....</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-meetups">
            <div className="uk-container uk-padding">
              <h1>{communitiesData.communities.meetups.meetupsHeading}</h1>
              <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m" style={{ boxShadow: "none", backgroundColor: "#2d4e9f", height: "250px", marginBottom: "30px" }}>
                <div className="ifo-mobile-meetup">
                  <h4 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsDate}</h4>
                  <h3 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                  <button className="uk-button uk-button-default ifo-btn">Learn More...</button>
                </div>
              </div>

              <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m" style={{ boxShadow: "none", backgroundColor: "#2d4e9f", height: "250px" }}>
                <div className="ifo-mobile-meetup">
                  <h4 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsDate}</h4>
                  <h3 className="ifo-white">{communitiesData.communities.meetups.meetups1.meetupsName}</h3>
                  <button className="uk-button uk-button-default ifo-btn">Learn More...</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Meetups