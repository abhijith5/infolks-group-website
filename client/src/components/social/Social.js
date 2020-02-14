import React, { Component } from 'react';
import './Social.css'
import socialData from '../strings.json'


class Social extends Component {
  render() {
    return (
      <div>
        <div className="section-social uk-visible@m" data-aos="fade-up">
          <div class="uk-container uk-padding ifo-container uk-text-center">
            <h2>{socialData.communities.social.socialHeading} <span className="ifo-about-heading-lorem">{socialData.communities.social.socialHeadingHigh}</span></h2>
            <p>{socialData.communities.social.socialDescription}</p>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-social">
            <div className="uk-container uk-padding uk-text-justify">
              <h2>{socialData.communities.social.socialHeading} <span className="ifo-about-heading-lorem">{socialData.communities.social.socialHeadingHigh}</span></h2>
              <p>{socialData.communities.social.socialDescription}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Social