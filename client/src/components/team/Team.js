import React, { Component } from 'react';
import './Team.css'
import OurTeamComponent from '../our-team/ourTeamComponent/OurTeamComponent';
import TeamMComponent from './teamMComponent/TeamMComponent';
import teamData from '../strings.json'

import teamImg from '../../assets/Group/Team/OutPut/Team.jpg'
import Back from '../Back';

import lead5 from '../../assets/lead/Sooraj.jpg'
import lead6 from '../../assets/lead/Midhun.jpg'
import lead8 from '../../assets/lead/Asif.jpg'
import lead7 from '../../assets/lead/Avinesh.jpg'
import lead3 from '../../assets/lead/BAdu.jpg'
import lead2 from '../../assets/lead/Hareesh.jpg'
import lead1 from '../../assets/lead/Sreerag.jpg'
import lead4 from '../../assets/lead/Zak.jpg'

class Team extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-teamPage">

            <div class="uk-inline">
              <img src={teamImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
              <div class="">
                <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900 }}>
                  <h1 className="ifo-white" style={{ fontSize: "50px", paddingTop: "50px" }}>Our
                  <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "50px", marginLeft: "10px" }}>Team</span>
                  </h1>
                  <p className="ifo-white">{teamData.ourTeam.ourTeamDescription}</p>
                </div>
              </div>
            </div>

            {/* <div className="ifo-communities-heading">
              <h1 className="ifo-black" style={{ fontSize: "40px", paddingTop: "50px" }}>Our <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "40px" }}>Team</span>
              </h1>
              <p className="ifo-black">{teamData.ourTeam.ourTeamDescription}</p>
            </div> */}
          </div>

          <div className="section-directors" >
            <div className="uk-container uk-padding ifo-container uk-text-center sd">
              <h2>Our <span className="ifo-about-heading-lorem">Directors</span></h2>

              <div class="uk-child-width-1-2 uk-text-center" uk-grid="true" style={{ marginTop: "10%" }} data-aos="fade-up">
                <div>
                  <img src="https://490z7i45htbb1f4tty9mdpi6-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/Data-Anno-Mujeeb-Kolasseri-Infolks.jpg"></img>
                </div>
                <div>
                  <div className="uk-text-left">
                    <h2>Mr. Mujeeb Kolasseri</h2>
                    <p style={{ marginTop: 0 }}>Founder, MD & CEO</p>
                    <div className="uk-text-left">
                      <p style={{ marginTop: "30px" }}>Mr. Mujeeb Kolasseri is a dreamer, a visionary and a strategist who laid the stepping stone of Infolks. Started the journey as an entrepreneur in the year 2016 by focusing on image annotation and machine learning techniques. Within 4 years of service, he has built his own empire in the field of data labeling and has this unique ability to attract the best talent, and engage with them to create global leadership teams which can drive Infolks to its next level.</p>
                      <div className="uk-flex">
                        <img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png" style={{ width: "25px", height: "25px" }}></img>
                        <p style={{ paddingLeft: "15px", margin: 0 }}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-child-width-1-2 uk-text-center" uk-grid="true" style={{ marginTop: "10%" }} data-aos="fade-up">
                <div>
                  <img src="https://490z7i45htbb1f4tty9mdpi6-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/Data-Anno-Mujeeb-Kolasseri-Infolks.jpg"></img>
                </div>
                <div>
                  <div className="uk-text-left">
                    <h2>Mr. Muneer Kolasseri</h2>
                    <p style={{ marginTop: 0 }}>Chairman & Director</p>
                    <div className="uk-text-left">
                      <p style={{ marginTop: "30px" }}>Mr. Muneer Kolasseri chairs the board of Infolks group after 6 years of expatriate life in Saudi Arabia. His immense experience and expertise in the service sector have helped Infolks steer to its bright future. Through his strategic vision, astute decision making and unmatched execution, he has inspired and nurtured his pupil to achieve their full potential. For Infolks, he is a big brother who has inspired the whole family with his charismatic personality and a clear sense of direction towards the company. </p>
                      <div className="uk-flex">
                        <img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png" style={{ width: "25px", height: "25px" }}></img>
                        <p style={{ paddingLeft: "15px", margin: 0 }}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-child-width-1-2 uk-text-center" uk-grid="true" style={{ marginTop: "10%" }} data-aos="fade-up">
                <div>
                  <img src="https://490z7i45htbb1f4tty9mdpi6-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/Data-Anno-Mujeeb-Kolasseri-Infolks.jpg"></img>
                </div>
                <div>
                  <div className="uk-text-left">
                    <h2>Mr. Navas Thazhathethil</h2>
                    <p style={{ marginTop: 0 }}>GM & Director</p>
                    <div className="uk-text-left">
                      <p style={{ marginTop: "30px" }} >Mr.Navas Thazhathethil, a man staring at the infolks group with all his determination to pave its way to success.  With his knowledge and expertise in the field of Commerce, his guidance to the company’s formation and its smooth running is an inevitable one. He combines the passion for employee satisfaction and business process expertise.</p>
                      <div className="uk-flex">
                        <img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png" style={{ width: "25px", height: "25px" }}></img>
                        <p style={{ paddingLeft: "15px", margin: 0 }}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="section-teamleaders" data-aos="fade-up">
            <div className="uk-container uk-padding ifo-container uk-text-center sd">
              <h2>Our <span className="ifo-about-heading-lorem">Team Leaders</span></h2>
              <div class="uk-child-width-1-4 uk-text-center" uk-grid="true" style={{ marginTop: "5%" }}>

                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders5.leadersImagePosition}
                  teamImageUrl={lead5}>
                  {teamData.ourTeam.teamLeaders5.leadersName}
                </OurTeamComponent>
                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders6.leadersImagePosition}
                  teamImageUrl={lead6}>
                  {teamData.ourTeam.teamLeaders6.leadersName}
                </OurTeamComponent>
                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders7.leadersImagePosition}
                  teamImageUrl={lead7}>
                  {teamData.ourTeam.teamLeaders7.leadersName}
                </OurTeamComponent>
                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders3.leadersImagePosition}
                  teamImageUrl={lead3}>
                  {teamData.ourTeam.teamLeaders3.leadersName}
                </OurTeamComponent>

                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders8.leadersImagePosition}
                  teamImageUrl={lead8}>
                  {teamData.ourTeam.teamLeaders8.leadersName}
                </OurTeamComponent>
                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders2.leadersImagePosition}
                  teamImageUrl={lead2}>
                  {teamData.ourTeam.teamLeaders2.leadersName}
                </OurTeamComponent>

                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders1.leadersImagePosition}
                  teamImageUrl={lead1}>
                  {teamData.ourTeam.teamLeaders1.leadersName}
                </OurTeamComponent>

                <OurTeamComponent
                  teamImagePosition={teamData.ourTeam.teamLeaders4.leadersImagePosition}
                  teamImageUrl={lead4}>
                  {teamData.ourTeam.teamLeaders4.leadersName}
                </OurTeamComponent>



              </div>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-team">
            <div className="ifo-mobile-team-head uk-padding" style={{ paddingTop: "30%" }}>
              <h1 className="ifo-white" style={{ fontSize: "40px", paddingTop: "50px" }}>Our
            <span className="ifo-communities-heading-brand ifo-white" style={{ fontSize: "40px", marginLeft: "10px" }}>Team</span>
              </h1>
              <p className="ifo-black">{teamData.ourTeam.ourTeamDescription}</p>
            </div>
          </div>


          <div className="uk-container uk-padding">
            <div className="section-mobile-directors" style={{ marginTop: "30px" }}>
              <h2>Our <span className="ifo-about-heading-lorem">Directors</span></h2>
              <div>
                <div style={{ boxShadow: "none", padding: 0 }} className="uk-card uk-card-default uk-card-body">
                  <div>
                    <img src={teamData.ourTeam.ourDirectors.ourDirectorsImageUrl}></img>
                  </div>
                  <div class="uk-text-center">
                    <h2 style={{ marginTop: "10px", marginBottom: "5px" }}>Mr. Mujeeb Kolasseri</h2>
                    <p style={{ marginTop: 0 }}>Founder, MD & CEO</p>
                  </div>
                  <div className="uk-text-justify">
                    <p>Mr. Mujeeb Kolasseri is a dreamer, a visionary and a strategist who laid the stepping stone of Infolks. Started the journey as an entrepreneur in the year 2016 by focusing on image annotation and machine learning techniques. Within 4 years of service, he has built his own empire in the field of data labeling and has this unique ability to attract the best talent, and engage with them to create global leadership teams which can drive Infolks to its next level.</p>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ boxShadow: "none", padding: 0 }} className="uk-card uk-card-default uk-card-body">
                  <div>
                    <img src={teamData.ourTeam.ourDirectors.ourDirectorsImageUrl}></img>
                  </div>
                  <div class="uk-text-center">
                    <h2 style={{ marginTop: "10px", marginBottom: "5px" }}>Mr. Muneer Kolasseri</h2>
                    <p style={{ marginTop: 0 }}>Chairman & Director</p>
                  </div>
                  <div className="uk-text-justify">
                    <p>Mr. Muneer Kolasseri chairs the board of Infolks group after 6 years of expatriate life in Saudi Arabia. His immense experience and expertise in the service sector have helped Infolks steer to its bright future. Through his strategic vision, astute decision making and unmatched execution, he has inspired and nurtured his pupil to achieve their full potential. For Infolks, he is a big brother who has inspired the whole family with his charismatic personality and a clear sense of direction towards the company. </p>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ boxShadow: "none", padding: 0 }} className="uk-card uk-card-default uk-card-body">
                  <div>
                    <img src={teamData.ourTeam.ourDirectors.ourDirectorsImageUrl}></img>
                  </div>
                  <div class="uk-text-center">
                    <h2 style={{ marginTop: "10px", marginBottom: "5px" }}>Mr. Navas Thazhathethil</h2>
                    <p style={{ marginTop: 0 }}>GM & Director</p>
                  </div>
                  <div className="uk-text-justify">
                    <p>Mr. Navas Thazhathethil, a man staring at the infolks group with all his determination to pave its way to success.  With his knowledge and expertise in the field of Commerce, his guidance to the company’s formation and its smooth running is an inevitable one. He combines the passion for employee satisfaction and business process expertise</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="section-mobile-team-leaders">
              <h2>Our <span className="ifo-about-heading-lorem">Team Leaders</span></h2>
              <div className="ifo-mobile-team-leaders-each">

                <TeamMComponent
                  teamLeadersUrl={lead5}
                  teamLeadersHead={teamData.ourTeam.teamLeaders5.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders5.leadersImagePosition}>
                </TeamMComponent>
                <TeamMComponent
                  teamLeadersUrl={lead6}
                  teamLeadersHead={teamData.ourTeam.teamLeaders6.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders6.leadersImagePosition}>
                </TeamMComponent>
                <TeamMComponent
                  teamLeadersUrl={lead7}
                  teamLeadersHead={teamData.ourTeam.teamLeaders7.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders7.leadersImagePosition}>
                </TeamMComponent>
                <TeamMComponent
                  teamLeadersUrl={lead3}
                  teamLeadersHead={teamData.ourTeam.teamLeaders3.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders3.leadersImagePosition}>
                </TeamMComponent>
                <TeamMComponent
                  teamLeadersUrl={lead8}
                  teamLeadersHead={teamData.ourTeam.teamLeaders8.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders8.leadersImagePosition}>
                </TeamMComponent>
                <TeamMComponent
                  teamLeadersUrl={lead2}
                  teamLeadersHead={teamData.ourTeam.teamLeaders2.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders2.leadersImagePosition}>
                </TeamMComponent>

                <TeamMComponent
                  teamLeadersUrl={lead1}
                  teamLeadersHead={teamData.ourTeam.teamLeaders1.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders1.leadersImagePosition}>
                </TeamMComponent>

                <TeamMComponent
                  teamLeadersUrl={lead4}
                  teamLeadersHead={teamData.ourTeam.teamLeaders4.leadersName}
                  teamLeadersPosition={teamData.ourTeam.teamLeaders4.leadersImagePosition}>
                </TeamMComponent>
              </div>
            </div>
          </div>
        </div>
        <Back></Back>
      </div >
    )
  }
}

export default Team