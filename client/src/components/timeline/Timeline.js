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
              <h2>{aboutData.about.timeline.timelineHeading}</h2>
            </div>
            <div class="timeline">
              <div class="container left" >
                <div class="content" data-aos="fade-right">
                  <h2>{aboutData.about.timeline.timeline1.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline1.timelineDescription}</p>
                </div>
              </div>
              <div class="container right" >
                <div class="content" data-aos="fade-left">
                  <h2>{aboutData.about.timeline.timeline2.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline2.timelineDescription}</p>
                </div>
              </div>
              <div class="container left" >
                <div class="content" data-aos="fade-right">
                  <h2>{aboutData.about.timeline.timeline3.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline3.timelineDescription}</p>
                </div>
              </div>
              <div class="container right" >
                <div class="content" data-aos="fade-left">
                  <h2>{aboutData.about.timeline.timeline4.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline4.timelineDescription}</p>
                </div>
              </div>    <div class="container left" >
                <div class="content" data-aos="fade-right">
                  <h2>{aboutData.about.timeline.timeline5.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline5.timelineDescription}</p>
                </div>
              </div>
              <div class="container right" >
                <div class="content" data-aos="fade-left">
                  <h2>{aboutData.about.timeline.timeline6.timelineYear}</h2>
                  <p>{aboutData.about.timeline.timeline6.timelineDescription}</p>
                </div>
              </div>
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