import React, { Component } from 'react';
import './Code.css'

class Code extends Component {
  render() {
    return (
      <div>
        <div className="section-code" data-aos="zoom-out">
          <div className="uk-container uk-padding ifo-container">
            <div className="ifo-code-heading uk-text-center">
              <h2>Code</h2>
              <div class="uk-child-width-1-2 uk-text-center" uk-grid="true">
                <div>
                  <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                    <img src="https://png.pngtree.com/svg/20170916/760db8f69c.png" width="30%" height="auto"></img>
                    <p>View on Github <i class="fas fa-compress"></i></p>
                  </div>
                </div>
                <div>
                  <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
                    <img src="https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png" width="30%" height="auto"></img>
                    <p>View on Medium <i class="fas fa-compress"></i></p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Code