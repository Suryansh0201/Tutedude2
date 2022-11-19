import React from "react";
import "./midContent.css";
const midContent = () => {
  return (
    <div className="main-mid">
      <div className="mid-head">
        <h2>Friends who enrolled {"(3)"}</h2>
      </div>

      <div className="mid-content">
        <div className="box-1 cont-1">
          <div className="name">
            <h4>Dhiraj Saxsena</h4>
            <p>14 Sep, 2022</p>
          </div>
          <p style={{ position: "relative", left: "-9rem", top: "-23px" }}>
            Courses enrolled{"(6)"}
          </p>
          <div className="sill">
            <div className="skill-1">
              <h4>UI/UX</h4>
              <h4>Photoshop</h4>
              <h4>illustrator</h4>
            </div>
            <br />
            <div className="skill-2">
              <h4>Python</h4>
              <h4>MERN</h4>
              <h4>Java</h4>
            </div>
          </div>
          <h3 className="ref-amt">Referral Amount ₹185</h3>
        </div>

        <div
          className=" box-2 cont-1"
          style={{ postion: "relative", gap: "3rem" }}
        >
          <div className="name">
            <h4>Subhash Gupta</h4>
            <p>15 Sep, 2022</p>
          </div>
          <p style={{ position: "relative", left: "-9rem", top: "-23px" }}>
            Courses enrolled{"(23)"}
          </p>
          <div className="sill">
            <div className="skill-1">
              <h4>UI/UX</h4>
              <h4>Photoshop</h4>
              <h4>illustrator</h4>
            </div>
            <br />
            <div className="skill-2">
              <h4>Python</h4>
              <h4>MERN</h4>
              <h4>Java</h4>
              <h4>C++</h4>
            </div>
          </div>
          <h3 className="ref-amt">Referral Amount ₹485</h3>
        </div>

        <div className=" box-3 cont-1">
          <div className="name">
            <h4>Prafull Kumar</h4>
            <p>14 Sep, 2022</p>
          </div>
          <p style={{ position: "relative", left: "-9rem", top: "-23px" }}>
            Courses enrolled{"(23)"}
          </p>
          <div className="sill">
            <div className="skill-1">
              <h4>UI/UX</h4>
              <h4>Photoshop</h4>
              <h4>illustrator</h4>
            </div>
            <br />
            <div className="skill-2">
              <h4>Python</h4>
              <h4>MERN</h4>
              <h4>Java</h4>
              <h4>C++</h4>
            </div>
          </div>
          <h3 className="ref-amt">Referral Amount ₹485</h3>
        </div>
      </div>
    </div>
  );
};

export default midContent;
