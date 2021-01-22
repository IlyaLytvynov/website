import React from "react";
import HeaderStrip from "../global/headerStrip";
import Main from "../global/main";
import Footer from "../global/footer";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="page__container">
        <HeaderStrip info={"Contact page"} />
        <Main pageName={"Contact"} />
        <Footer />
      </div>
    );
  }
}
