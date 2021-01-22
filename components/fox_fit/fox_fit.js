import React from "react";
import HeaderStrip from "../global/headerStrip";
import Main from "../global/main";
import Footer from "../global/footer";
import GetInTouch from "../global/getInTouch";

export default class FoxFit extends React.Component {
  render() {
    return (
      <div className="page__container">
        <HeaderStrip info={"Contact page"} />
        <Main pageName={"Fox Fit"} />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}
