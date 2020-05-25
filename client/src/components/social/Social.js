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
            <p>We strongly believe that we hold a huge responsibility towards our society and make someone’s dream come true. With around 350 young and energetic employees, especially from rural areas, we are still working to achieve the goals of our vision. In addition Infolks has taken over 20 families over the past 3 years with a clear guidance from our charity council. The ultimate aim of Infolks is to bring rural development, empower communities, and end poverty. This divine effort and fruitful dedication towards the community help Infolks look after many indigent families especially by providing victuals.

We do not consider this as a charity.<span style={{ fontWeight: "600", fontSize: "20px" }}> It's simply just a knock to the future!</span></p>
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