import React, { Component } from 'react';
import './ServiceComponent.css'


class ServiceComponent extends Component {
  render() {
    return (
      <div>
        <div className="hvr-float-shadow" style={{ height: "144px" }}>
          <div class="uk-card-media-top ">
            <a href={this.props.serviceUrl}>
              <img src={this.props.serviceImageUrl} height="auto" width="580px" alt="" />
              {/* <div className="service-img" style={{ backgroundImage: "../../../assets/Group/ICONS/OurService/OutPut/Annotation.png" }}></div> */}
            </a>
          </div>
          <div class="uk-card-body" style={{ padding: 0 }}>
            <h4>{this.props.seviceImageName}</h4>
          </div>
        </div>


      </div>
    )
  }
}

export default ServiceComponent