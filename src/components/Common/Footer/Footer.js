import React from "react";
import companylogo from "../../../resources/logo.png";
import fbLogo from "../../../resources/footer/facebook.png";
import instaLogo from "../../../resources/footer/InstagramLogo.png";
import lkdLogo from "../../../resources/footer/LinkedinLogo.png";
import twitterLogo from "../../../resources/footer/twitter.png";
import "./Footer.css";

function Footer() {
  return (
    <footer
      class="text-center text-lg-start text-muted"
      style={{ color: "black", backgroundColor: "#000000"}}
    >
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 pt-2 pb-3"
        style={{ borderTop:"1px solid #4E4E55" }}
      >
        <div className="container-fluid text-light">
          <div className="row textcolor">
            <div className="col-md-6" style={{ paddingLeft: "24px" }}>
              <div className="row">
                <div className="col-1 mt-3" style={{ marginRight: "24px" }}>
                  <img alt="" src={companylogo} height="48px" width="48px" />
                </div>

                <div
                  className="col-9 mt-3 "
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#CACACE",
                  }}
                >
                  Partner with us to make the intagible tangible <br />
                  <a
                    href="mailto:info@braina.live"
                    style={{ color: "rgb(194, 30, 82)" }}
                  >
                    <u>info@braina.live</u>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <ul className="imp-lonk">
                <li>
                  <a
                    href="/privacy"
                    target="_blank"
                    style={{ fontSize: "16px", color: "#fff" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    target="_blank"
                    style={{ fontSize: "16px", color: "#fff" }}
                  >
                    Customer Support
                  </a>
                </li>
                <li style={{ marginRight: "4px" }}>
                  <a
                    href="/terms"
                    target="_blank"
                    style={{ fontSize: "16px", color: "#fff" }}
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        class="d-flex justify-content-center justify-content-lg-between"
        style={{ color: "black", borderTop:"1px solid #4E4E55" }}
      >
        <div className="container-fluid text-center text-md-start text-light">
          <div
            className="row pt-3 pb-3"
            style={{ padding: "0px 15px 0px 35px" }}
          >
            <div
              className="col-md-8"
              style={{
                fontsize: "14px;",
                fontweigth: "600",
                color: "#4E4E55",
                paddingLeft: "5px",
              }}
            >
              © All rights reserved 2022 | Brainalive Research Pvt. Ltd.
            </div>
            <div className="col-md-4">
              <ul className="solical-media">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063753982208"
                    target="_blank"
                  >
                    <img src={fbLogo} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Braina_Live" target="_blank">
                    <img src={twitterLogo} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/braina_live/"
                    target="_blank"
                  >
                    <img src={instaLogo} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/brain-alive/"
                    style={{ marginRight: "10px" }}
                    target="_blank"
                  >
                    <img src={lkdLogo} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
