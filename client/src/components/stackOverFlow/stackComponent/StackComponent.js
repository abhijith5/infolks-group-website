import React, { Component } from 'react';
import './StackComponent.css'

class StackComponent extends Component {
  render() {
    return (
      <div>
        <div class="uk-child-width-1-2 uk-text-center" uk-grid="true" style={{ marginBottom: "30px" }}>

          <div style={{ width: "20%" }}>
            <p style={{ marginBottom: 0, marginTop: "5px" }}>{this.props.stackDate}</p>
            <img src={this.props.stackImageUrl} width="80px" height="auto" />
            <p style={{ marginTop: 0 }}>{this.props.stackAuthor}</p>
          </div>
          <div style={{ width: "80%" }} className="uk-text-left">
            <h3 className="ifo-brand">{this.props.stackHead}</h3>
            <p>{this.props.stack}</p>
          </div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default StackComponent