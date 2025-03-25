import React from "react";
import "./Feature.css"; // Importing the CSS file
import { FaBrain,FaGraduationCap, FaAward } from "react-icons/fa";
import { BsBlockquoteLeft } from "react-icons/bs";

const OlympiadFeature = () => {
  return (
    <div className="ceta-box">
    <p id="card-number">3</p>
    <h2 className="card-header">International AI & Emerging Technologies Olympiad</h2>
    <h2 className="card-header">India, UAE, Singapore</h2>
    <div className="card-container">
      {/* Fundamental Knowledge Card */}
      <div className="card bg-blue">
        <div className="card-content">
          <FaBrain className="icon" />
          <div>
            <h2>Acquire Fundamental Knowledge of:</h2>
            <p>
              1. Artificial Intelligence <br />
              2. Blockchain <br />
              3. Cybersecurity <br />
              4. Data Analytics
            </p>
          </div>
        </div>
      </div>

      {/* Concept by IIT, IIM, etc. */}
      <div className="card bg-purple">
        <div className="card-content">
          <BsBlockquoteLeft className="icon" />
          <div>
            <h2>Concept by Experts</h2>
            <p>
              IIT, IIM Alumni, CFA Charterholder, Gold Medalist, Emerging Technologies Consultant, 
              ex-Professors from India & UAE.
            </p>
          </div>
        </div>
      </div>

      {/* Exciting Prizes & Launching in India */}
      <div className="card bg-green">
        <div className="card-content">
          <FaGraduationCap className="icon" />
          <div>
            <h2>Launching 1st Time in India</h2>
            <p>
              Open for Classes 7th to 12th (Students from All Streams are Eligible).
            </p>
          </div>
        </div>
      </div>

      {/* Awards to be Won */}
      <div className="card bg-orange">
        <div className="card-content">
          <FaAward className="icon" />
          <div>
            <h2 >Awards to be Won!</h2>
            <p>
              Exciting Prizes, Certificates, Medals for Outstanding Achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OlympiadFeature;
