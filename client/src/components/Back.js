import React, { Component } from 'react'
import BackToTop from "react-back-to-top-button";

export class Back extends Component {
  render() {
    return (
      <div>
        <BackToTop
          showOnScrollUp
          showAt={100}
          speed={1500}
          easing="easeInOutQuint"
        >
          <img src="https://pngimage.net/wp-content/uploads/2018/06/go-to-top-png-5.png" width="70px" height="auto"></img>
        </BackToTop>
      </div>
    )
  }
}

export default Back
