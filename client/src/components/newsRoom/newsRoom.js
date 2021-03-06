import React, { Component } from 'react'
import contactImg from '../../assets/Group/ContactUS/OutPut/ContactUs.jpg'
import Back from '../Back';

import './newsRoom.css'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import news1 from '../../assets/news1.png'
import news2 from '../../assets/news2.png'
import news3 from '../../assets/news3.png'
import news4 from '../../assets/news4.png'
import news5 from '../../assets/news5.png'

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
import PressMentions from '../pressMentions/PressMentions';

export default class newsRoom extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-contact">

            <div class="uk-inline">
              <img src={contactImg} alt="" style={{ marginTop: "-60px", height: "40vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-60px", height: "40vh", width: "100vw" }} ></div>

            </div>



            <div className="uk-container" style={{ marginTop: "20px" }}>
              <div className="section-contact-about">
                <h1>Press Realese</h1>


                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

                  <ul class="uk-slider-items uk-grid">
                    <li class="uk-width-3-4">
                      <div class="uk-panel">
                        <img src={img1} style={{ height: "60vh", width: "100%" }} alt="" />
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                          <h5 style={{ marginTop: 0, backgroundColor: "orange", padding: "5px", width: "150px", paddingLeft: "15px", borderRadius: "5px" }}>Data Labelling</h5>

                          <h3 style={{ marginTop: 0 }} class="uk-margin-remove">
                            INFOLKS Signs ODC contract with CONTINENTAL AG</h3>
                          {/* <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                          <button className="uk-button uk-button-primary" style={{ marginTop: "15px", borderRadius: "20px" }} uk-toggle="target: #modal-close-outside">Read more.....</button>

                          <div id="modal-close-outside" class="uk-modal-container" uk-modal="true" >
                            <div class="uk-modal-dialog uk-modal-body" style={{ marginBottom: "50px" }}>
                              <button class="uk-modal-close-outside" type="button" uk-close="true"></button>
                              <div className="uk-text-center">
                                <h2>INFOLKS Signs ODC contract with CONTINENTAL AG</h2>

                                <img src={news1}></img>
                                <p>Infolks today announced that on [date of signing] they had entered in an agreement to work as an Offshore Dedicated Center (ODC) for Continental AG.

                                Infolks is an outsourcing expert in India providing various business services. Apart from their most featured service data labelling, this ODC marks the beginning of their outstaffing services. It is decided to set up Continental's ODC at the new workspace of the company which is under progress. The station is about to start functioning shortly.



                                The ODC is set up to meet the data labelling requirements of Continental's upcoming AI based projects. Offshore team set up by Infolks will consist of dedicated and experienced data labellers whose skills match with the skill set required for Continental's project. The workspace can accommodate 100+ employees and is readly customizable according to the team's requirements. "The arrangements can also help Continental to remotely manage their offshore team" - Infolks CEO added.</p>
                                <img src={news2}></img>
                                <p>As per Continental's instructions, workspace must be subjecting to various data security and quality certifications. Infolks had ensured this through their ISO 27001:2013, ISO 9001:2015 certifications and EU GDPR standards. The workspace is already equipped with firewall secured connections, 24*7 surveillance systems and biometric facilities.</p>
                                <p>To set up an efficient offshore team in Kerala, India, read more about<Link to="/outstaffing"> Infolks’s outstaffing services</Link> and <Link to="/contact">send them your requirements.</Link></p>
                                <h2 style={{ fontWeight: "600" }}>About Infolks</h2>
                                <p>Infolks Pvt.Ltd is a leading data labeling company and outsourcing expert headquartered at Mannarkkad, Kerala. Primarily Infolks process training data for ML models and computer vision projects. Other services include Outstaffing(offshore dedicated center), Redaction, Software Solutions and BPO services. With 4 years of experience especially in data labelling, the company aims at rural development by introducing better job opportunities for the youth. Having successfully worked with various MNCs and fortune companies, Infolks continue to provide best services at cheap service charges.</p>

                                <p>
                                  For more information visit: <a href=" http://infolks.info/"> http://infolks.info/</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="uk-width-3-4">
                      <div class="uk-panel">
                        <img src={img1} style={{ height: "60vh", width: "100%" }} alt="" />
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                          <h5 style={{ marginTop: 0, backgroundColor: "orange", padding: "5px", width: "150px", paddingLeft: "15px", borderRadius: "5px" }}>Celebration</h5>

                          <h3 style={{ marginTop: 0 }} class="uk-margin-remove">INFIESTA 2K19: INFOLKS CELEBRATES ITS  3rd  ANNIVERSARY</h3>
                          {/* <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                          <button className="uk-button uk-button-primary" style={{ marginTop: "15px", borderRadius: "20px" }} uk-toggle="target: #modal-close-outside1">Read more.....</button>

                          <div id="modal-close-outside1" class="uk-modal-container" uk-modal="true" >
                            <div class="uk-modal-dialog uk-modal-body" style={{ marginBottom: "50px" }}>
                              <button class="uk-modal-close-outside" type="button" uk-close="true"></button>
                              <div className="uk-text-center">
                                <h2>INFIESTA 2K19: INFOLKS CELEBRATES ITS  3rd  ANNIVERSARY</h2>

                                <img src={news3}></img>
                                <p><span style={{ fontWeight: "600" }}>Mannarkad, Kerala, India, 29th August 2019</span>- Infolks Pvt. Ltd, one of the leading data labeling service providers in India celebrated its 3rd anniversary. The occasion was named Infiesta 2k19 and was rich in colour and sound. Celebrations lasted a complete working day and the event included sessions like cake cutting, inaugural ceremony, award distributions and many cultural programmes. The event was inaugurated by MP of Palakkad Constituency Shri V.K Sreekandan.  MP also congratulated the team for becoming one of the successful entrepreneurs in the district and offered any sort of aid for the organisation to achieve complete rural development.

                                </p><p>The company was founded in 2016, by Mujeeb Kolasseri and his two other friends. Started off with a 7 member team, business ramped up quickly over the course of 3 years, and today the company employs around 350 members. On the occasion Founder, MD, and CEO of Infolks Mr.Mujeeb Kolasseri remarked: “We expanded a lot with many milestones, goals, plans, and dreams through hard work, passion, and dedication of our team members. These 3 years of success would not be possible without the enormous support of the folks. This is an incredible growth for us.”</p>
                                <img src={news4}></img>
                                <p>Various cultural programs organised by the employees boosted the mood of celebrations. Among the pool of events, award distribution was a key session where the best performers from previous year were selected and honoured. Sooraj C(Outstanding leadership), Ibrahim Badusha PV(Outstanding leadership), Sruthi MK(Best employee), Sreejith KS(Best employee), Jamshad KV(Special award), Jamsheer P(Innovative employee), Shafi P(Lifetime employee), Midhun P(Employee of the year) and Rabeeh TK(Best employee) were the title winners. </p>
                                <p>On the occasion the company CEO also addressed his folks regarding the 3 successful years in the journey of Infolks. In his talk he clearly stated every aspect of the company like mission, vision, responsibilities etc, and also introduced some of his future plans. “Within 2 years Infolks will move into a new office space, the number of employees will double in five months, and in the next two years we will be able to create at least 2000 job opportunities” -  Mujeeb Kolasseri said about his future plans.    </p>
                                <img src={news5}></img>
                                <h2 style={{ fontWeight: "600" }}>About Infolks</h2>
                                <p>Infolks Pvt.Ltd is a leading data labeling company and outsourcing expert headquartered at Mannarkkad, Kerala. Primarily Infolks process training data for ML models and computer vision projects. Other services include Outstaffing(offshore dedicated center), Redaction, Software Solutions and BPO services. With 4 years of experience especially in data labelling, the company aims at rural development by introducing better job opportunities for the youth. Having successfully worked with various MNCs and fortune companies, Infolks continue to provide best services at cheap service charges.</p>

                                <p>
                                  For more information visit: <a href=" http://infolks.info/"> http://infolks.info/</a></p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </li>


                  </ul>

                  <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                  <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

                </div>



                {/* <div className="">
                  <div class="uk-text-center" uk-grid="true">
                    <div class="uk-width-3-4" >
                      <div class="uk-card uk-card-primary uk-card-body news1" style={{ padding: 0, height: "500px" }}>
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-left">
                          <h5 style={{ backgroundColor: "orange", padding: "5px", width: "150px", paddingLeft: "15px", borderRadius: "5px" }}>Heading</h5>

                          <h2 style={{ marginTop: "10px" }}>Headingggggg</h2>
                          <p style={{ marginBottom: 0 }}>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <p style={{ marginTop: 0 }}>Default Lorem ipsum dolor sit .</p>

                          <div style={{ display: "flex" }}>
                            <p>20 / 03 / 2016</p> <span style={{ marginLeft: "50%" }}>qwerty.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="uk-width-1-4" style={{ paddingLeft: "10px" }}>
                      <div class="uk-card uk-card-primary uk-card-body news2" style={{ padding: 0, marginBottom: "10px", height: "243px" }}>
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-left">
                          <h5 style={{ backgroundColor: "orange", padding: "5px", width: "100px", paddingLeft: "15px", borderRadius: "5px" }}>Heading</h5>

                          <h3 style={{ marginTop: "0" }}>Heading</h3>
                        </div>
                      </div>
                      <div class="uk-card uk-card-primary uk-card-body news3" style={{ padding: 0, height: "246px" }}>
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-left">
                          <h5 style={{ backgroundColor: "orange", padding: "5px", width: "100px", paddingLeft: "15px", borderRadius: "5px" }}>Heading</h5>

                          <h3 style={{ marginTop: "0" }}>Heading</h3>

                        </div>
                      </div>
                    </div>

                  </div>
                </div> */}
                <div class="news-room" style={{ marginTop: "20px" }}>
                  <div className="uk-container">
                    <PressMentions></PressMentions>
                  </div>
                  {/* <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid="true">
                    <div>
                      <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Default</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Primary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card uk-card-secondary uk-card-body">
                        <h3 class="uk-card-title">Secondary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Primary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

            </div>
          </div>

          <div className="section-contact-about">

          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-contact">
            <div className="ifo-mobile-team-head uk-padding" style={{ paddingTop: "30%" }}>
              <div className="ifo-communities-heading">
                <h1 className="ifo-white" style={{ fontSize: "50px" }}>Contact</h1>
                <p>
                  <p className="uk-text-bold ifo-white" style={{ marginBottom: 0 }}>Address</p>
                  <p className="ifo-white" style={{ marginTop: 0 }}>Infolks Pvt ltf<br />Infolks Building<br />Mannarkkad<br />Kerala</p>
                  <p className="ifo-white"> <span uk-icon="icon: mail;" className="uk-white" style={{ paddingRight: "10px" }}></span> infolks@gmail.com</p>
                  <p className="ifo-white"> <span uk-icon="icon: receiver;" className="uk-white" style={{ paddingRight: "10px" }}></span> +91234324829</p>

                </p>
              </div>
            </div>
          </div>

          <div className="section-contact-about">
            <div className="uk-container uk-padding ifo-container">
              <h2 className="uk-text-center">Get In Touch</h2>

              <div >
                <form className=" " onSubmit={this.handleSubmit}>

                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold" for="form-stacked-text">Name</label>
                    <div class="uk-form-controls">
                      <input type="text" class="uk-input" id="form-stacked-text" type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold" for="form-stacked-text">Title</label>
                    <div class="uk-form-controls">
                      <input type="text" class="uk-input" id="form-stacked-text" type="text" placeholder="Enter title" name="title" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold" for="form-stacked-text">Company Name</label>
                    <div class="uk-form-controls">
                      <input type="text" class="uk-input" id="form-stacked-text" type="text" placeholder="Enter Company Name" name="companyName" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold" for="form-stacked-text">Business Mail</label>
                    <div class="uk-form-controls">
                      <input type="email" class="uk-input" id="form-stacked-text" type="text" placeholder="Enter email" name="bussinessMail" onChange={this.handleChange} />
                      <span style={{ fontSize: "14px", color: "#afabab" }}>We'll never share your email with anyone else</span>
                    </div>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold" for="form-stacked-text">Contact Number</label>
                    <div class="uk-form-controls">
                      <input type="text" class="uk-input" id="form-stacked-text" type="text" placeholder="Enter Contact Number" name="contactNumber" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold" for="form-stacked-text">Comments</label>
                    <textarea type="textarea" class="uk-textarea" rows="5" placeholder="Textarea" name="comments" onChange={this.handleChange}></textarea>
                  </div>
                  <div className="uk-text-right">
                    <button type="submit" className="uk-button uk-button-default ifo-btn">Submit</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        <Back></Back>
      </div >
    )
  }
}


// import React, { Component } from 'react'
// import img1 from '../../assets/img1.jpg'
// import img2 from '../../assets/img2.jpg'
// import img3 from '../../assets/img3.jpg'
// import contactImg from '../../assets/Group/ContactUS/OutPut/ContactUs.jpg'
// import './newsRoom.css'

// export default class newsRoom extends Component {
//   render() {
//     return (
//       <div>
//         <div className="section-contact">
//           <div class="uk-inline">
//             <img src={contactImg} alt="" style={{ marginTop: "-60px", height: "40vh", width: "100vw", objectFit: "cover" }} />
//             <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-60px", height: "40vh", width: "100vw" }} ></div>

//           </div>
//           <div className="uk-container" style={{ marginTop: "20px" }}>
//             <div className="section-contact-newroom">
//               <h1>Press Realese</h1>
//               <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

//                 <ul class="uk-slider-items uk-grid">
//                   <li class="uk-width-3-4">
//                     <div class="uk-panel">
//                       <img src={img1} height="50px" alt="" />
//                       <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
//                         <h3 class="uk-margin-remove">Bottom</h3>
//                         <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="uk-width-3-4">
//                     <div class="uk-panel">
//                       <img src={img1} height="50px" alt="" />
//                       <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
//                         <h3 class="uk-margin-remove">Bottom</h3>
//                         <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                       </div>
//                     </div>
//                   </li>

//                   <li class="uk-width-3-4">
//                     <div class="uk-panel">
//                       <img src={img1} height="50px" alt="" />
//                       <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
//                         <h3 class="uk-margin-remove">Bottom</h3>
//                         <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="uk-width-3-4">
//                     <div class="uk-panel">
//                       <img src={img1} height="50px" alt="" />
//                       <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
//                         <h3 class="uk-margin-remove">Bottom</h3>
//                         <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>

//                 <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
//                 <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     )
//   }
// }

