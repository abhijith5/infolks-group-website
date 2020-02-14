import React, { Component } from 'react';

class OurTeamMComponent extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "30px" }}>
        <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0, height: "250px", width: "250px" }}>
          <img height="auto" width="250" src={this.props.teamImageUrl} alt="" />

          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-left" style={{ padding: 0, paddingLeft: "15px", paddingBottom: "10px", paddingTop: "10px" }}>
            <p className="ifo-white" style={{ marginBottom: 0 }}>{this.props.children}</p>
            <span>{this.props.teamImagePosition}</span>
          </div>

        </div>
      </div>
    )
  }
}

export default OurTeamMComponent