import React, { Component } from 'react';
import WorkLife from '../components/workLife/WorkLife';
import Meetups from '../components/meetups/Meetups';
import Communities from '../components/communities/Communities';
import StackOverFlow from '../components/stackOverFlow/StackOverFlow';
import Code from '../components/code/Code';
import Video from '../components/video/Video';
import Technical from '../components/technical/Technical';
import Social from '../components/social/Social';
import Gallery from 'react-grid-gallery';
import Galleryq from '../components/gallery/Gallery';
import Blog from './blog/Blog';
import Back from './Back'

class Community extends Component {
  render() {
    return (
      <div>
        <Communities></Communities>
        <div className="section-community">
          <div class="uk-container uk-padding ifo-container uk-text-center">
            {/* <a className="uk-button uk-visible@m" href="#worklife">Worklife</a>
            <a className="uk-button uk-visible@m" href="#meetups">Meetups</a>
            <a className="uk-button uk-visible@m" href="#qa">Q & A</a>
            <a className="uk-button uk-visible@m" href="#code">Code</a>
            <a className="uk-button uk-visible@m" href="#blog">Blog</a>
            <a className="uk-button uk-visible@m" href="#videos">Videos</a>
            {/* <a className="uk-button" href="#tech">Technical</a> */}
            {/* <a className="uk-button uk-visible@m" href="#social">Social Responsibility</a> */}
            {/* <a className="uk-button uk-visible@m" href="#gallery">Gallery</a> */} 

            <hr></hr>
            <div id="worklife">
              <WorkLife></WorkLife>
            </div>
            <div id="meetups">
              <Meetups></Meetups>
            </div>
            <div id="social">
              <Social></Social>
            </div>
            {/* <div id="qa">
              <StackOverFlow></StackOverFlow>
            </div> */}
            {/* <div id="code">
              <Code></Code>
            </div> */}
            <div id="blog">
              <Blog></Blog>
            </div>
            {/* <div id="videos">
              <Video></Video>
            </div> */}
            {/* <div id="tech">
              <Technical></Technical>
            </div> */}

            <div id="gallery">
              <Galleryq></Galleryq>
            </div>
          </div>
        </div>
        <Back></Back>
      </div>
    )
  }
}
export default Community;