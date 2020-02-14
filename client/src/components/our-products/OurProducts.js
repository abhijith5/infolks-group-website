import React, { Component } from 'react';
import './OurProducts.css'
import OurProductsComponents from './our-products-component/OurProductsComponents';


class OurProducts extends Component {
  render() {
    return (
      <div className="section-products uk-visible@m">
        <div class="uk-container uk-padding ifo-container uk-text-center">
          <h2>Our <span className="ifo-about-heading-lorem">Partners</span></h2>

          <div className="uk-flex uk-flex-center">
            <OurProductsComponents productsImageUrl="https://png.pngtree.com/element_our/sm/20180518/sm_5aff6089d3e02.png"></OurProductsComponents>
            <OurProductsComponents productsImageUrl="https://png.pngtree.com/element_our/sm/20180518/sm_5aff6089d3e02.png"></OurProductsComponents>
            <OurProductsComponents productsImageUrl="https://png.pngtree.com/element_our/sm/20180518/sm_5aff6089d3e02.png"></OurProductsComponents>
            <OurProductsComponents productsImageUrl="https://png.pngtree.com/element_our/sm/20180518/sm_5aff6089d3e02.png"></OurProductsComponents>
            <OurProductsComponents productsImageUrl="https://png.pngtree.com/element_our/sm/20180518/sm_5aff6089d3e02.png"></OurProductsComponents>
            <OurProductsComponents productsImageUrl="https://png.pngtree.com/element_our/sm/20180518/sm_5aff6089d3e02.png"></OurProductsComponents>

          </div>
        </div>
      </div>
    )
  }
}

export default OurProducts