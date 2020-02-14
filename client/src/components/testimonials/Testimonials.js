import React, { Component } from 'react';
import './Testimonials.css'
import TestimonialsComponent from './testimonialsComponent/TestimonialsComponent';
import homeTestimonialsData from '../strings.json'


class Testimonials extends Component {
  render() {
    return (
      <div className="section-testimonials uk-visible@m" data-aos="zoom-in-up">
        <div className="uk-container uk-padding ifo-container">
          <div className="uk-text-center">
            <h2>{homeTestimonialsData.home.homeTestimonials.homeTestimonialsHeading}</h2>
            <div uk-slider="center: true">

              <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                <ul class="uk-slider-items uk-child-width-1-1 uk-grid">
                  <li>
                    <TestimonialsComponent
                      testimonialsAuthor={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsAuthor}
                      testimonialsPosition={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsPosition}>
                      {homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsDescription}
                    </TestimonialsComponent>
                  </li>
                  <li>
                    <TestimonialsComponent
                      testimonialsAuthor={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsAuthor}
                      testimonialsPosition={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsPosition}>
                      {homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsDescription}
                    </TestimonialsComponent>
                  </li>
                  <li>
                    <TestimonialsComponent
                      testimonialsAuthor={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsAuthor}
                      testimonialsPosition={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsPosition}>
                      {homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsDescription}
                    </TestimonialsComponent>
                  </li>
                  <li>
                    <TestimonialsComponent
                      testimonialsAuthor={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsAuthor}
                      testimonialsPosition={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsPosition}>
                      {homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsDescription}
                    </TestimonialsComponent>
                  </li>
                  <li>
                    <TestimonialsComponent
                      testimonialsAuthor={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsAuthor}
                      testimonialsPosition={homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsPosition}>
                      {homeTestimonialsData.home.homeTestimonials.homeTestimonials1.testimonialsDescription}
                    </TestimonialsComponent>
                  </li>

                </ul>

                <a class="uk-position-center-left uk-position-small ifo-black" href="#" uk-slidenav-previous="true" uk-slider-item="previous" style={{ color: "black" }}></a>
                <a class="uk-position-center-right uk-position-small ifo-black" href="#" uk-slidenav-next="true" uk-slider-item="next" style={{ color: "black" }}></a>

              </div>

              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials