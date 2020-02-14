import React, { Component } from 'react';


class VideoComponent extends Component {
  render() {
    return (
      <div>
        <div className="section-video">
          <div className="uk-container uk-padding ifo-container">
            <div className="ifo-video-heading uk-text-center">

              <div class="uk-card uk-card-default uk-card-body" style={{ width: "300px", padding: 0 }}>
                <img src="https://image.freepik.com/free-vector/technology-conference-poster-template_1361-1211.jpg" width="300px" height="auto"></img>
                <p style={{ padding: "10px", paddingBottom: "20px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div class="uk-overlay uk-overlay-default uk-position-center" style={{ padding: 0 }}>
                  <img src="http://icon-park.com/imagefiles/movie_play_blue.png" width="80px"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoComponent