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
            <h2>Emerging Technologies Covered</h2>
            <p>
              AI, Blockchain, Data Analytics, Cloud Computing, MERN Stack, Python, Java & more.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-purple">
        <div className="card-content">
          <FaLaptopCode className="icon" />
          <div>
            <h2>No Prior Coding Required</h2>
            <p>
              Learn with AI-driven No-Code/Low-Code platforms like ChatGPT, MidJourney & more.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-green">
        <div className="card-content">
          <MdWork className="icon" />
          <div>
            <h2>Employment & Internship Support</h2>
            <p>
              Linked with job opportunities, internships & placement assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-orange">
        <div className="card-content">
          <FaUsers className="icon" />
          <div>
            <h2>Soft Skills & Career Development</h2>
            <p>
              CV building, interview skills & communication workshops.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-pink">
        <div className="card-content">
          <MdSchool className="icon" />
          <div>
            <h2>75% Hands-On Learning</h2>
            <p>
              Live projects with real-world use cases in various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-dark">
        <div className="card-content">
          <FaCertificate className="icon" />
          <div>
            <h2>NSDC Certified</h2>
            <p>
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
