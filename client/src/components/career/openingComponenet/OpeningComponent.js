import React, { Component } from 'react';

class OpeningComponent extends Component {
  render() {
    return (
      <div>
        <div className="ul-opening1">
          <h5 className="uk-text-bold">{this.props.openHead}</h5>
          <p>{this.props.openShortDesc}</p>
          <ul uk-accordion="true">
            <li>
              <a class="uk-accordion-title" href="#" style={{ padding: "8px", width: "20%", fontSize: "12px", backgroundColor: "blue", color: "white", paddingLeft: "16px", borderRadius: "20px" }}>View Details</a>
              <div class="uk-accordion-content">
                <p className="ifo-brand uk-text-bold">Description: </p>
                <p>{this.props.openDescription}</p>
                <p className="ifo-brand uk-text-bold">Qualification:</p>
                <p>{this.props.openQualification}</p>
                <p className="ifo-brand uk-text-bold">Preferred Skills: </p>
                <p>{this.props.openSkill}</p>
                <p className="ifo-brand uk-text-bold"> Experience:</p>
                <p>{this.props.openExp}</p>
                <button className="uk-button uk-button-default ifo-white" style={{ backgroundColor: "#2D4D9A" }}>Apply Now</button>

              </div>
            </li>
          </ul>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default OpeningComponent