import React, { Component } from 'react'
import contactImg from '../../assets/Group/ContactUS/OutPut/ContactUs.jpg'
import Back from '../Back';

import './newsRoom.css'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'



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
                <h1>News Room</h1>

                <div className="">
                  <div class="uk-text-center" uk-grid="true">
                    <div class="uk-width-3-4" >
                      <div class="uk-card uk-card-primary uk-card-body news1" style={{ padding: 0, height: "500px" }}>
                        {/* <img src={img1} style={{ height: "500px" }}></img> */}
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
                        {/* <img src={img1}></img> */}
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-left">
                          <h5 style={{ backgroundColor: "orange", padding: "5px", width: "100px", paddingLeft: "15px", borderRadius: "5px" }}>Heading</h5>

                          <h3 style={{ marginTop: "0" }}>Heading</h3>
                        </div>
                      </div>
                      <div class="uk-card uk-card-primary uk-card-body news3" style={{ padding: 0, height: "246px" }}>
                        {/* <img src={img1}></img> */}
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-left">
                          <h5 style={{ backgroundColor: "orange", padding: "5px", width: "100px", paddingLeft: "15px", borderRadius: "5px" }}>Heading</h5>

                          <h3 style={{ marginTop: "0" }}>Heading</h3>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="news-room" style={{ marginTop: "20px" }}>
                  <h2>News Room</h2>
                  <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid="true">
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
                  </div>
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
