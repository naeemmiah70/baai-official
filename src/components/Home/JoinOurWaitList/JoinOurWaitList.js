import React from "react";
import "./JoinOurWaitList.css";
import bitCoin from "../../../resources/home/bitcoin.png";

const JoinOurWaitList = () => {
  return (
    <section className="d-flex justify-content-center joinWaitList">
      <div className="waitList-grid-bg">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={bitCoin} alt="" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <div>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "28px",
                    lineHeight: "38px",
                    color: "#FFFFFF",
                    margin:0,
                    padding:0,
                    zIndex:1
                  }}
                >
                  Join our waitlist now
                </p>
                <p className="joinList-text">
                  Be among the first to experience the cutting- <br /> edge
                  innovation that awaits!
                </p>
                <p className="joinList-text">We've got surprises, waiting just for you.</p>
              </div>
              <div className="mt-4">
                <form action="">
                  <div className="joinList-input">
                    <input  type="email" placeholder="Enter your email id"/>
                  </div>
                  <div>
                    <button className="joinlist-btn">Join the waitlist</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurWaitList;
