import React from "react";
import "./Feature.css"; // Importing the CSS file
import { FaRobot, FaLaptopCode, FaUsers, FaCertificate } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";

const CETAFeatureCard = () => {
  return (
    <div className="ceta-box">
    <p id="card-number">2</p>
    <h2 className="card-header">Certified Emerging Technologies Analyst (CETA) Program</h2>
    <div className="card-container">
      <div className="card bg-blue">
        <div className="card-content">
          <FaRobot className="icon" />
          <div>
            <h2 className="card-title">Emerging Technologies Covered</h2>
            <p className="card-description">
              AI, Blockchain, Data Analytics, Cloud Computing, MERN Stack, Python, Java & more.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-purple">
        <div className="card-content">
          <FaLaptopCode className="icon" />
          <div>
            <h2 className="card-title">No Prior Coding Required</h2>
            <p className="card-description">
              Learn with AI-driven No-Code/Low-Code platforms like ChatGPT, MidJourney & more.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-green">
        <div className="card-content">
          <MdWork className="icon" />
          <div>
            <h2 className="card-title">Employment & Internship Support</h2>
            <p className="card-description">
              Linked with job opportunities, internships & placement assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-orange">
        <div className="card-content">
          <FaUsers className="icon" />
          <div>
            <h2 className="card-title">Soft Skills & Career Development</h2>
            <p className="card-description">
              CV building, interview skills & communication workshops.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-pink">
        <div className="card-content">
          <MdSchool className="icon" />
          <div>
            <h2 className="card-title">75% Hands-On Learning</h2>
            <p className="card-description">
              Live projects with real-world use cases in various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-dark">
        <div className="card-content">
          <FaCertificate className="icon" />
          <div>
            <h2 className="card-title">NSDC Certified</h2>
            <p className="card-description">
              Receive recognized certifications in emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CETAFeatureCard;
