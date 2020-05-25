import React, { Component } from 'react'
import './OurFolks.css'

export default class OurFolks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      atCount: 14,
      satCount: 11,
      ptCount: 22,
      ttCount: 12,
      bdtCount: 10,
      prtCount: 12,
      hrtCount: 3,
      dstCount: 23,
      totalCount: 214
    }
  }


  listClick(team) {
    switch (team) {
      case "at": this.setState({ totalCount: this.state.atCount })
        break;
      case "sat": this.setState({ totalCount: this.state.satCount })
        break;
      case "pt": this.setState({ totalCount: this.state.ptCount })
        break;
      case "tt": this.setState({ totalCount: this.state.ttCount })
        break;
      case "bdt": this.setState({ totalCount: this.state.bdtCount })
        break;
      case "prt": this.setState({ totalCount: this.state.prtCount })
        break;
      case "hrt": this.setState({ totalCount: this.state.hrtCount })
        break
      case "dst": this.setState({ totalCount: this.state.dstCount })
        break
    }
  }

  render() {
    return (
      <div style={{ height: "40vh", marginTop: "30px" }}>
        <div className="uk-container ifo-container">
          <h2>Our Folks</h2>
          <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid="true">
            <div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Get to know the strength of Infolks Family.</h3>
                <div class="uk-inline">
                  <button class="uk-button uk-button-default" type="button">Choose the team</button>
                  <div uk-drop="mode: click">
                    <div className="ifo-card" style={{ padding: "20px" }}>
                      <ul className="uk-list uk-list-divider" >
                        <li onClick={(e) => this.listClick("at")}>Annotation Team</li>
                        <li onClick={(e) => this.listClick("sat")}>Sample Annotation Team</li>
                        <li onClick={(e) => this.listClick("pt")}>Project Team</li>
                        <li onClick={(e) => this.listClick("tt")}>Technical Team</li>
                        <li onClick={(e) => this.listClick("bdt")}>Bussiness Development Team</li>
                        <li onClick={(e) => this.listClick("prt")}>Public Relations Team</li>
                        <li onClick={(e) => this.listClick("hrt")}>Human Resources Team</li>
                        <li onClick={(e) => this.listClick("dst")}>Data Security Team</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card-body">
                {/* <h3 class="uk-card-title">Primary</h3> */}
                <p style={{ fontSize: "40px", fontWeight: "600" }}>{this.state.totalCount}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
