import React, { Component } from 'react';
import './Timeline.css'
import aboutData from '../strings.json'


class Timeline extends Component {
  render() {
    return (
      <div>
        <div className="section-timeline uk-visible@m">
          <div class="uk-container uk-padding ifo-container">

            <div className="uk-text-center">
              <h2>Milestones</h2>
            </div>
            <div class="timeline">
              <div class="container left" >
                <div class="content" data-aos="fade-right">
                  {/* <h2>{aboutData.about.timeline.timeline1.timelineYear}</h2> */}
                  {/* <p>{aboutData.about.timeline.timeline1.timelineDescription}</p> */}
                  <h2>2016</h2>
                  <ul>
                    <li>Official beginning of Infolks as image annotation company.</li>
                    <li>Started with a 7 member team in an office set up at an ancestral house.</li>
                    <li>Team strength increased above 20.</li>
                  </ul>
                </div>
              </div>
              <div class="container right" >
                <div class="content" data-aos="fade-left">
                  {/* <h2>{aboutData.about.timeline.timeline2.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline2.timelineDescription}</p> */}
                  <h2>2017</h2>
                  <ul>
                    <li>Infolks family became a team of 70+ members.</li>
                    <li>Relocated to a well established office structure with added infrastructure</li>
                  </ul>
                </div>
              </div>
              <div class="container left" >
                <div class="content" data-aos="fade-right">
                  {/* <h2>{aboutData.about.timeline.timeline3.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline3.timelineDescription}</p> */}
                  <h2> 2018</h2>
                  <ul>
                    <li>Team strength leveraged above 150 and was still counting.</li>
                    <li>Inauguration of new workspace with all needed facilities.</li>
                    <li>Introduced multiple outsourcing services.</li>
                  </ul>
                </div>
              </div>
              <div class="container right" >
                <div class="content" data-aos="fade-left">
                  {/* <h2>{aboutData.about.timeline.timeline4.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline4.timelineDescription}</p> */}
                  <h2> 2019</h2>
                  <ul>
                    <li>ISO 27001:2013 certified.</li>
                    <li>Extension of workspace with improved infrastructure.</li>
                    <li>Rebranded logo giving a new and fresh look for our services.</li>
                  </ul>
                </div>
              </div>    <div class="container left" >
                <div class="content" data-aos="fade-right">
                  {/* <h2>{aboutData.about.timeline.timeline5.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline5.timelineDescription}</p> */}
                  <h2>2020</h2>
                  <ul>
                    <li>A team of around 350 employees.</li>
                    <li>ISO 9001:2015 certified.</li>
                    <li>Introduction of Offshore Dedicated Centers with Continental being our first project.</li>
                  </ul>
                </div>
              </div>
              {/* <div class="container right" >
                <div class="content" data-aos="fade-left">
                  <h2>{aboutData.about.timeline.timeline6.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline6.timelineDescription}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="uk-container uk-padding">
            <div className="uk-text-center">
              <h2>{aboutData.about.timeline.timelineHeading}</h2>
            </div>
            <ul uk-accordion="true">
              <li class="uk-open">
                <a class="uk-accordion-title" href="#" style={{ backgroundColor: "none", fontsize: "none", color: "none", width: "none" }}>{aboutData.about.timeline.timeline1.timelineYear}</a>
                <div class="uk-accordion-content">
                  <p>{aboutData.about.timeline.timeline1.timelineDescription}</p>
                </div>
              </li>
              <li>
                <a
                  class="uk-accordion-title"
                  href="#"
                  style={{ backgroundColor: "none", fontsize: "none", color: "none", width: "none" }}>
                  {aboutData.about.timeline.timeline2.timelineYear}</a>
                <div class="uk-accordion-content">
                  <p>{aboutData.about.timeline.timeline2.timelineDescription}</p>
                </div>
              </li>
              <li>
                <a
                  class="uk-accordion-title"
                  href="#"
                  style={{ backgroundColor: "none", fontsize: "none", color: "none", width: "none" }}>
                  {aboutData.about.timeline.timeline3.timelineYear}</a>
                <div class="uk-accordion-content">
                  <p>{aboutData.about.timeline.timeline3.timelineDescription}</p>
                </div>
              </li>
              <li>
                <a
                  class="uk-accordion-title"
                  href="#"
                  style={{ backgroundColor: "none", fontsize: "none", color: "none", width: "none" }}>
                  {aboutData.about.timeline.timeline4.timelineYear}</a>
                <div class="uk-accordion-content">
                  <p>{aboutData.about.timeline.timeline4.timelineDescription}</p>
                </div>
              </li>
              <li>
                <a
                  class="uk-accordion-title"
                  href="#"
                  style={{ backgroundColor: "none", fontsize: "none", color: "none", width: "none" }}>
                  {aboutData.about.timeline.timeline5.timelineYear}</a>
                <div class="uk-accordion-content">
                  <p>{aboutData.about.timeline.timeline5.timelineDescription}</p>
                </div>
              </li>       <li>
                <a
                  class="uk-accordion-title"
                  href="#"
                  style={{ backgroundColor: "none", fontsize: "none", color: "none", width: "none" }}>
                  {aboutData.about.timeline.timeline6.timelineYear}</a>
                <div class="uk-accordion-content">
                  <p>{aboutData.about.timeline.timeline6.timelineDescription}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
export default Timeline