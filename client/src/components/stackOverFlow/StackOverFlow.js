import React, { Component } from 'react';
import './StackOverFlow.css'
import StackComponent from './stackComponent/StackComponent';
import StackMComponent from './stackMComponent/StackMComponent';
import qaData from '../strings.json'

class StackOverFlow extends Component {
  render() {
    return (
      <div>
        <div className="section-stack uk-visible@m" data-aos="fade-up">
          <div className="uk-container uk-padding ifo-container">
            <div className="ifo-worklife-heading uk-text-center">
              <h2>{qaData.communities.qa.qaHeading}</h2>
              <StackComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackComponent>
              <StackComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackComponent>
              <StackComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackComponent>
              <StackComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackComponent>
              <StackComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackComponent>
              <StackComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackComponent>
              <StackComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackComponent>
            </div>
          </div>
        </div>

        <div className="uk-hidden@m">
          <div className="section-mobile-stack">
            <div className="uk-container uk-padding uk-text-center">
              <h2>{qaData.communities.qa.qaHeading}</h2>
              <StackMComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackMComponent>
              <StackMComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackMComponent>  <StackMComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackMComponent>  <StackMComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackMComponent>  <StackMComponent
                stackImageUrl={qaData.communities.qa.qa1.qaImageUrl}
                stackAuthor={qaData.communities.qa.qa1.qaAuthor}
                stackDate={qaData.communities.qa.qa1.qaDate}
                stack={qaData.communities.qa.qa1.qaDescription}
                stackHead={qaData.communities.qa.qa1.qaHeading}>
              </StackMComponent>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default StackOverFlow