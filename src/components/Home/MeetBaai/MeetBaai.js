import React, { useEffect } from "react";
import "./MeetBaai.css";
import attention from "../../../resources/home/meet-baai/attention.png";
import advertizement from "../../../resources/home/meet-baai/advertizement.png";
import engagement from "../../../resources/home/meet-baai/engagement.png";
import inteent from "../../../resources/home/meet-baai/intent.png";
import product from "../../../resources/home/meet-baai/product.png";
import gaming from "../../../resources/home/meet-baai/gaming.png";

import line1 from "../../../resources/home/meet-baai/line-1.png";
import line2 from "../../../resources/home/meet-baai/line-2.png";
import line3 from "../../../resources/home/meet-baai/line-3.png";
import line4 from "../../../resources/home/meet-baai/line-4.png";
import line5 from "../../../resources/home/meet-baai/line-5.png";
import line6 from "../../../resources/home/meet-baai/line-6.png";

import AOS from "aos";
import "aos/dist/aos.css";

const MeetBaai = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="meet-baai-section row">
      <div className="d-flex justify-content-center">
        <div className="meet-baai-container">
          <div className="meet-baai-grid-bg">
            <h1 className="meet-baai-heading">MEET BAAI</h1>
            <div className="row">
              <div className="col-md-5 d-flex justify-content-end ">
                <div className="">
                  <div
                    data-aos="fade-up-left"
                    className="d-flex align-items-center attension-per-second"
                  >
                    <p
                      style={{ position: "relative", top: "6px" }}
                      className="meet-baai-feature-left-text"
                    >
                      Attention per second
                    </p>
                    <img className="meet-baai-images" src={attention} alt="" />
                    <img
                      style={{ position: "relative", top: "40px" }}
                      src={line1}
                      alt=""
                    />
                  </div>

                  <div
                    data-aos="fade-left"
                    style={{ marginTop: "82px", marginBottom: "82px" }}
                    className="d-flex align-items-center advertizement-performance"
                  >
                    <p
                      style={{ position: "relative", top: "7px" }}
                      className="meet-baai-feature-left-text"
                    >
                      Advertisement <br /> Performance
                    </p>
                    <img
                      className="meet-baai-images"
                      src={advertizement}
                      alt=""
                    />
                    <img src={line2} alt="" />
                  </div>

                  <div
                    data-aos="fade-down-left"
                    className="d-flex align-items-center engagement-per-frame"
                  >
                    <p
                      style={{ position: "relative", top: "7px" }}
                      className="meet-baai-feature-left-text"
                    >
                      Engagement per <br /> frame
                    </p>
                    <img className="meet-baai-images" src={engagement} alt="" />
                    <img
                      style={{ position: "relative", bottom: "38px" }}
                      src={line3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <p style={{ visibility: "hidden" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus doloribus dolorem sunt voluptas deleniti beatae. Numquam
                  error tempora blanditiis veniam quam ratione ut magni, sit
                  optio quia similique aliquam
                </p>
                <img src="" alt="" />
              </div>

              <div className="col-md-5 d-flex justify-content-start">
                <div>
                  <div
                    data-aos="fade-up-right"
                    className="d-flex align-items-center intent-driven"
                  >
                    <img
                      style={{ position: "relative", top: "38px" }}
                      src={line4}
                      alt=""
                    />
                    <img className="meet-baai-images" src={inteent} alt="" />
                    <p
                      style={{ position: "relative", top: "9px" }}
                      className="meet-baai-feature-right-text"
                    >
                      Intent driven assistive <br /> tech
                    </p>
                  </div>

                  <div
                    data-aos="fade-right"
                    style={{ marginTop: "82px", marginBottom: "82px" }}
                    className="d-flex align-items-center product-attraction"
                  >
                    <img src={line5} alt="" />
                    <img className="meet-baai-images" src={product} alt="" />
                    <p
                      style={{ position: "relative", top: "7px" }}
                      className="meet-baai-feature-right-text"
                    >
                      Product attraction & <br /> placement
                    </p>
                  </div>

                  <div
                    data-aos="fade-down-right"
                    className="d-flex align-items-center gaming-performance"
                  >
                    <img
                      style={{ position: "relative", bottom: "37px" }}
                      src={line6}
                      alt=""
                    />
                    <img className="meet-baai-images" src={gaming} alt="" />
                    <p
                      style={{ position: "relative", top: "9px" }}
                      className="meet-baai-feature-right-text"
                    >
                      Gaming performance <br /> analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBaai;
