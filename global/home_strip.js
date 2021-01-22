import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";

const ComponentToTrack = ({ isVisible }) => {
  const style = {
    transition: "1s",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0)" : "translate(0, 20px)",
  };
  return (
    <h2 style={style} className={`strip-title title_${this.props.thisName}`}>
      {this.props.thisTitle}
    </h2>
  );
};

export default class HomeMainStrip extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleText: true,
    };
  }
  render() {
    const {
      stripName,
      subtitle,
      linkPage,
      button,
      description,
      title,
    } = this.props;
    return (
      <div className={`page-strip strip_${stripName}`}>
        <div className={`strip_${stripName}__wrapper`}>
          <div className={`strip-img img_${stripName}`}></div>
          <div className={`strip-info strip-info_${stripName}`}>
            <TrackVisibility>
              <ComponentToTrack thisName={stripName} thisTitle={title} />
            </TrackVisibility>
            <h3 className={`strip-subtitle subtitle_${stripName}`}>
              {subtitle}
            </h3>
            <p className={`strip-description description_${stripName}`}>
              {description}
            </p>
            <Link to={`{${linkPage}}`}>
              <button className={`strip-action-btn btn_${stripName}`}>
                {button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
