import React from "react";
import HeaderStrip from "../global/headerStrip";
import Main from "../global/main";
import Footer from "../global/footer";

export default class Login extends React.Component {
  render() {
    return (
      <div className="page__container">
        <HeaderStrip info={"Login page"} />
        <Main pageName={"Login page"} />
        <Footer />
      </div>
    );
  }
}
