import React from "react";
import logo from "../../assets/images/global-imgs/wix-logo.png";

export default class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      freeWebsite: true,
    };
  }
  render() {
    return this.state.freeWebsite ? (
      <div className="free-website__banner">
        <h5 className="banner__info">
          This site was designed with the{" "}
          <span>
            <img src={logo} width="38px" height="15px" alt="company-logo" />
          </span>
          .com website builder. Create your website today.
        </h5>
        <button className="upgrade-site__btn">Start Now</button>
      </div>
    ) : null;
  }
}
