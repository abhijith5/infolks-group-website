import React, { Component } from 'react';


class OurProductsComponents extends Component {
  render() {
    return (
      <div>
        <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "none" }}>
          <img src={this.props.productsImageUrl} width="100" height="auto" />
        </div>
      </div>
    )
  }
}
export default OurProductsComponents