import React, { Component } from 'react';

class TeamMComponent extends Component {
  render() {
    return (
      <div>
        <div className="uk-card uk-card-default uk-card-boby" style={{ padding: "5px", boxShadow: "none", marginBottom: "30px" }}>
          <div className="uk-flex">
            <img src={this.props.teamLeadersUrl} style={{ width: "80px", height: "80px" }} />
            <div style={{ paddingLeft: "20px" }}>
              <h3 style={{ marginTop: 0, marginBottom: 0 }}>{this.props.teamLeadersHead}</h3>
              <p style={{ marginTop: 0 }}>{this.props.teamLeadersPosition}</p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default TeamMComponent