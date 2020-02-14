import React, { Component } from 'react';
import './StackMComponent.css'

class StackMComponent extends Component {
  render() {
    return (
      <div>
        <div className="ifo-mobile-stack" style={{ marginBottom: "20px" }}>
          <div className="ifo-mobile-stack-head uk-flex">
            <img src={this.props.stackImageUrl} style={{ height: "35px", width: "35px" }} />
            <h3 style={{ marginTop: 0, marginBottom: "5px" }}>{this.props.stackHead}</h3>
          </div>
          <div className="uk-text-right">
            <p>{this.props.stackAuthor}</p>
          </div>
          <div className="ifo-mobile-stack-para uk-text-justify">
            <p style={{ marginTop: 0, marginBottom: 0 }}>{this.props.stack}</p>
          </div>
          <hr></hr>
        </div>
      </div>
    )
  }
}
export default StackMComponent