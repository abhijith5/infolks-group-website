import React, { Component } from 'react';
import './RedactionComponent.css'

class RedactionComponent extends Component {
  render() {
    return (
      <div className="uk-text-center">
        <img width="700px" height="auto" src={this.props.redactionImageUrl} />
        <h4 className="uk-text-bold">{this.props.redactionTitle}</h4>
        <p>{this.props.redactionContent}</p>
      </div>
    )
  }
}

export default RedactionComponent