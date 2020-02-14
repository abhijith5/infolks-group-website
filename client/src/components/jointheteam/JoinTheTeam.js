import React, { Component } from 'react';
import './JoinTheTeam.css'
import CountUp from 'react-countup';


class JoinTheTeam extends Component {
  render() {
    return (
      <div>
        <div className="uk-visible@m">
          <div className="section-team " data-aos="fade-up">
            <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
              <div>
                <div style={{ paddingTop: "30%" }}>
                  <h1 style={{ fontSize: "50px" }}>LOREM iPSUM</h1>
                  <h1>Ipsum Lorem</h1>
                  <button className="uk-button uk-button-default" style={{ backgroundColor: "white" }}>Join The Team</button>
                </div>
              </div>
              <div>
                <img style={{ marginTop: "-30px" }} src="https://img.freepik.com/free-vector/modern-event-poster-template_1361-1219.jpg?size=626&ext=jpg"></img>
              </div>
            </div>
          </div>

          <div className="section-count">
            <div class="uk-container uk-padding ifo-container uk-text-center">

              <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
                <div>
                  <h4 className="uk-text-left">In Numbers</h4>
                  <span class="uk-margin-small-right" uk-icon="icon:users; ratio: 2.5" ></span>
                  <br></br>
                  <CountUp end={210} duration={5} style={{ fontSize: "50px" }} />
                  <p style={{ marginBottom: 0, fontSize: "x-large" }}>Employees at </p><p style={{ marginTop: 0, fontSize: "x-large" }}>infolks group</p>
                </div>
                <div>
                  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="true">

                    <ul class="uk-slideshow-items">
                      <li style={{ backgroundColor: "#2D4D9A" }} className="uk-text-left uk-padding">
                        <ul className="uk-list">
                          <h3>Software Developer</h3>
                          <li>Python</li>
                          <li>React</li>
                          <li>Angular</li>
                        </ul>
                      </li>
                      <li style={{ backgroundColor: "#2D4D9A" }}>
                        <p>Software Developer 2</p>

                      </li>
                      <li style={{ backgroundColor: "#2D4D9A" }}>
                        <p>Software Developer 3</p>

                      </li>
                    </ul>

                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="uk-container uk-padding uk-text-center">
            <CountUp end={210} duration={5} style={{ fontSize: "50px" }} />
            <p style={{ marginBottom: 0, fontSize: "x-large" }}>Employees at </p><p style={{ marginTop: 0, fontSize: "x-large" }}>infolks group</p>
          </div>
        </div>

      </div>
    )
  }
}

export default JoinTheTeam