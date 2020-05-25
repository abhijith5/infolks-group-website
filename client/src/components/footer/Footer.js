import React, { Component } from 'react';
import './Footer.css'

import footerImg from '../../assets/Logo/logo5w.png'

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
const Route = require("react-router-dom").Route;

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div style={{ borderTop: "1px solid #ededed", backgroundColor: "#2D4D9A" }} className="uk-visible@m">
            <div className="uk-child-width-1-2 uk-text-center" uk-grid="true">
              <div style={{ width: "40%" }}>
                <div className="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none", backgroundColor: "#2D4D9A" }}>
                  <img src={footerImg} style={{ width: "50%", height: "auto" }}></img>
                </div>
              </div>
              <div style={{ width: "60%" }}>
                <div className="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none", backgroundColor: "#2D4D9A" }}>
                  <div className="uk-child-width-1-3" uk-grid="true">
                    <div>
                      <ul className="uk-list uk-text-left ifo-white" style={{ fontSize: "14px" }}>
                        <h4 className="ifo-white">Services</h4>
                        <li><a href="https://infolks.info/" style={{ color: "#fff" }}>Data Labelling</a></li>
                        <li><a href="outstaffing" style={{ color: "#fff" }}>Out Staffing</a></li>
                        <li><a href="redaction" style={{ color: "#fff" }}>Redaction</a></li>
                        <li><a href="software" style={{ color: "#fff" }}>Software Development</a></li>
                        <li><a href="bpo" style={{ color: "#fff" }}>BPO Services</a></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="uk-list uk-text-left ifo-white" style={{ fontSize: "14px" }}>
                        <h4 className="ifo-white">Community</h4>
                        <li><a href="/community#worklife" style={{ color: "#fff" }}>Worklife</a></li>
                        <li><a href="https://www.infolks.info/blog/" style={{ color: "#fff" }}>Blog</a></li>
                        <li><a href="/community#qa" style={{ color: "#fff" }}>Q & A</a></li>
                        <li><a href="/community#social" style={{ color: "#fff" }}>Social Responsibility</a></li>
                        <li><a href="/community#meetups" style={{ color: "#fff" }}>Meetups</a></li>
                        <li><a href="newsroom" style={{ color: "#fff" }}>News Room</a></li>
                      </ul>
                    </div>
                    <div className="uk-text-left ifo-white">
                      <h4 className="ifo-white">Contact</h4>
                      <p style={{ fontSize: "14px" }}>Infolks Pvt ltd<br />
                        Infolks building<br />
                        Mannarkkad<br />
                        Kerala</p>
                      <p style={{ fontSize: "14px", margin: "0" }}>info@infolks.in</p>
                      <p style={{ fontSize: "14px", margin: "0" }}>HR: +91 7025889922</p>
                      <p style={{ fontSize: "14px", margin: "0" }}>Project: +91 7025889911</p>
                      <p style={{ fontSize: "14px", margin: "0" }}>(for Client Related enquiries only)</p>
                      <div>
                        <ul className="uk-list uk-flex">
                          <li style={{ marginRight: "25px", marginTop: "10px" }}><a href="https://www.facebook.com/infolks.Group/
" uk-icon="icon: facebook"></a></li>
                          <li style={{ marginRight: "25px" }}><a href=" https://www.linkedin.com/company/infolks/" uk-icon="icon: linkedin"></a></li>
                          <li style={{ marginRight: "25px" }}><a href=" https://twitter.com/infolksmkd/" uk-icon="icon: twitter"></a></li>
                          <li style={{ marginRight: "25px" }}><a href="https://www.instagram.com/infolks/" uk-icon="icon: instagram"></a></li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="uk-text-center ifo-white" style={{ borderTop: "1px solid #ededed", paddingTop: "20px", paddingBottom: "20px" }}>
              ISO 27001:2013 Certified | ISO 9001:2015 Certified | © 2020 INFOLKS
        </div>
          </div>

        </div>


        <div className="uk-hidden@m">
          <div className="section-mobile-footer">
            <div className="uk-container uk-padding uk-text-center" style={{ backgroundColor: "#2D4D9A" }}>
              <div className="uk-text-center">
                <ul className="uk-list" style={{ fontSize: "18px" }}>
                  <h2 className="ifo-white" >Services</h2>
                  <li><a href="" className="ifo-white" >Image Annotation</a></li>
                  <li><a href="software" className="ifo-white" >Software Development</a></li>
                  <li><a href="redaction" className="ifo-white" >Redaction</a></li>
                  <li><a href="bpo" className="ifo-white" >BPO Services</a></li>
                  <li><a href="outstaffing" className="ifo-white" >Out Staffing</a></li>
                </ul>
              </div>
              <div className="uk-text-center">
                <ul className="uk-list" style={{ fontSize: "18px" }}>
                  <h2 className="ifo-white" >Community</h2>
                  <li><a href="/community#worklife" className="ifo-white" >Worklife</a></li>
                  <li><a href="https://www.infolks.info/blog/" className="ifo-white" >Blog</a></li>
                  <li><a href="/community#qa" className="ifo-white" >Q & A</a></li>
                  <li><a href="/community#social" className="ifo-white" >Social Responsibility</a></li>
                  <li><a href="/community#meetups" className="ifo-white" >Meetups</a></li>

                </ul>
              </div>
              <div className="uk-text-center">
                <h2 className="ifo-white">Contact</h2>
                <p style={{ fontSize: "18px" }} className="ifo-white" >Infolks Pvt ltd<br />
                  Infolks building<br />
                  Mannarkkad<br />
                  Kerala</p>
              </div>

              <img src={footerImg} width="200px" height="auto" />

              <div className="uk-text-center" style={{ marginTop: "40px" }}>
                <p style={{ marginBottom: "0" }} className="ifo-white">Copyright Infolks pvt ltd 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Footer