import React, { Component } from 'react';
import './Contact.css'
import axios from 'axios'
import contactImg from '../../assets/Group/ContactUS/OutPut/ContactUs.jpg'
import Back from '../Back';

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      title: "",
      companyName: "",
      bussinessMail: "",
      contactNumber: "",
      comments: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault()

    const { name, title, companyName, bussinessMail, contactNumber, comments } = this.state

    const form = await axios.post('/api/form', {

      name,
      title,
      companyName,
      bussinessMail,
      contactNumber,
      comments
    })
      .then(response => {
        console.log(response.status)
        if (response.status == 200) {
          alert("Success")
        } else {
          console.log("false")
        }
      })
      .catch(e => {
        console.log("error")
      })
  }

  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-contact">

            <div class="uk-inline">
              <img src={contactImg} alt="" style={{ marginTop: "-20px", height: "80vh", width: "100vw", objectFit: "cover" }} />
              <div class="uk-overlay-primary uk-position-cover" style={{ marginTop: "-20px", height: "80vh", width: "100vw" }} ></div>
              <div class="" style={{ marginTop: "100px" }}>
                <div className="uk-position-center-left" style={{ paddingLeft: "50px", zIndex: 900 }}>
                  <h1 className="ifo-white" style={{ fontSize: "50px" }}>Want To Standout Your Business?</h1>
                  <p style={{ color: "white" }}>
                    We are here to help you gain success. Want to know more about our services, pricings and demos?
                    Get In Touch with our executives now!


                  </p>
                </div>
              </div>
            </div>

            {/* <div className="ifo-communities-heading">
              <h1 className="ifo-white" style={{ fontSize: "50px" }}>Contact</h1>
              <p>
                <p className="uk-text-bold ifo-white" style={{ marginBottom: 0 }}>Address</p>
                <p className="ifo-white" style={{ marginTop: 0 }}>Infolks Pvt ltf<br />Infolks Building<br />Mannarkkad<br />Kerala</p>
                <p className="ifo-white"> <span uk-icon="icon: mail;" className="uk-white" style={{ paddingRight: "10px" }}></span> infolks@gmail.com</p>
                <p className="ifo-white"> <span uk-icon="icon: receiver;" className="uk-white" style={{ paddingRight: "10px" }}></span> +91234324829</p>

              </p>
            </div> */}
          </div>

          <div className="section-contact-about">
            <div className="uk-container uk-padding ifo-container">
              <h2 className="uk-text-center">Get In Touch</h2>

              <div style={{ paddingLeft: "25%", paddingRight: "25%" }}>
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
export default Contact