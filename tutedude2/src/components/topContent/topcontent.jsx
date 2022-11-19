import React from "react";
import "./topcontent.css";
const topcontent = () => {
  return (
    <div className="main-content">
      <div className="top-content" style={{ marginBottom: "27px" }}>
        <h3>
          UI/UX {">"} Refer & Earn {">"} Friends Referred
        </h3>
        <h2 className="back">←go back</h2>
      </div>
      <div className="ref">
        <div className="ref-code">
          <p> Your Referral Code </p>
          <h2>E D C 5 4</h2>
        </div>
        <div className="wallet-bal">
          <p>Wallet Balance</p>
          <h3>₹500</h3>
        </div>
      </div>
    </div>
  );
};

export default topcontent;
