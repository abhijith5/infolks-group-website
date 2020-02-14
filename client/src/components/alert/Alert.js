import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div>
        <div class="uk-alert-success" uk-alert="true">
          <a class="uk-alert-close" uk-close="true"></a>
          <p>Success</p>
        </div>
      </div>

    )
  }
}

export default Alert