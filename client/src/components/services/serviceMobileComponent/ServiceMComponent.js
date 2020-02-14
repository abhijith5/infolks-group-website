import React, { Component } from 'react';
import './ServiceMComponent.css'

class ServiceMComponent extends Component {
  render() {
    return (
      <div>
        <div className="uk-card uk-card-default uk-card-body" style={{ boxShadow: 'none', padding: "5px" }}>
          <div className="ifo-mobile-service" style={{ display: "flex" }}>
            <div className="ifo-m-1" style={{ flexBasis: "200px" }}>
              <img src={this.props.serviceImageUrl} alt="" uk-img="true" width="100%" height="auto" />
            </div>
            <div className="ifo-m-2" style={{ flexBasis: "250px", paddingTop: "15px" }}>
              <h4>{this.props.seviceImageName}</h4>
            </div>
            <div className="ifo-m-3" style={{ flexBasis: "80px", paddingTop: "15px" }}>
              <img src="https://image.flaticon.com/icons/svg/60/60758.svg" width="20px"></img>
            </div>
          </div>
          <hr></hr>
        </div>

        {/* <div class="uk-card uk-card-default uk-text-center" style={{ boxShadow: 'none' }}>
          <div class="uk-card-media-top">
            <img src={this.props.serviceImageUrl} alt="" uk-img="true" width="120" height="auto" />
          </div>
          <div class="uk-card-body">
            <h4>{this.props.seviceImageName}</h4>
          </div>
        </div> */}
      </div>
    )
  }
}
export default ServiceMComponent