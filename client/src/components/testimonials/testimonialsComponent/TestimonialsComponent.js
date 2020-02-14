import React, { Component } from 'react';
import './TestimonialsComponent.css'

class TestimonialsComponent extends Component {
  render() {
    return (
      <div>
        <div class="uk-card uk-card-default">
          {/* <div class="uk-card-media-top">
                        <img src="https://www.bigcommerce.com/blog/wp-content/uploads/2017/04/customer-testimonials-hero.jpg" alt="" />
                      </div> */}
          <div class="uk-card-body uk-text-justify" style={{ paddingLeft: "10%", paddingRight: "10%",borderBottom:"15px solid palevioletred" }}>
            {/* <h3 class="uk-card-title">Headline</h3> */}
            <p><span style={{ fontSize: "40px" }}>" </span> {this.props.children}<span style={{ fontSize: "40px" }}>" </span></p>
            <div className="uk-text-right">
              <p style={{ marginBottom: 0 }}>{this.props.testimonialsAuthor}</p>
              <span>{this.props.testimonialsPosition}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TestimonialsComponent