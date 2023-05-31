import React from "react";
import userEngagement from "../../../resources/home/user-engagement.png";
import "./UserEngagement.css";

const UserEngagement = () => {
  return (
    <section>
      <div>
        <h5
          style={{
            fontSize: "32px",
            lineHeight: "44px",
            color: "#4E4E55",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          User Engagement Analytics{" "}
        </h5>
        <p
          style={{
            fontSize: "28px",
            lineHeight: "38px",
            textAlign: "center",
            color: "#313135",
            fontWeight: 400,
          }}
        >
          The science of{" "}
          <span style={{ color: "#0C8AE6" }}>computer vision</span> and{" "}
          <span style={{ color: "#0C8AE6" }}>the brain</span> serves as the
          foundation <br /> for engagement analytics.
        </p>
      </div>
      <div style={{ marginTop: "40px", marginBottom: "80px" }}>
        <div className="text-center">
          <img className="img-fluid" src={userEngagement} alt="" />
        </div>
      </div>
    </section>
  );
};

export default UserEngagement;
