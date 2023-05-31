import React from "react";
import "./Header.css";
import blueRigng from "../../../resources/home/blue-ring.png";
import baaiLogho from "../../../resources/home/baai-icon.png";
import downArrow from "../../../resources/home/down-arrow.png";

const Header = () => {
  return (
    <section className="header-bg">
      <div>
        <h1 className="header-heading">
          Revolutionize <br /> Human Engagement
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="header-blue-ring d-flex justify-content-center align-items-center">
          <div className="d-flex align-items-center ">
            <img src={baaiLogho} alt="" />
            <h4 className="baai-heading">BAAI</h4>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <p className="meet-baai">Meet BAAI</p>
          <img
            style={{ height: "6px", width: "10px" }}
            src={downArrow}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
