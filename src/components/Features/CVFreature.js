import React from "react";
import { FaGraduationCap, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";
import { GrFormCheckmark } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import "./Feature.css";

const CVFeatures = () => {
  return (
    <div>
    <h1 className="gradient-text">Why Edubuk ?</h1>
    <div className="solution-card">
      {/* Top Section - Title */}
      <p id="card-number">1</p>
      <h2 className="card-header">Revolutionizing Credential Verification</h2>

      {/* Problem Section */}
      <div className="card-pros-cons">
      <div className="card-section problem">
        <FaExclamationTriangle className="icon warning" />
        <h3 className="section-title">The Crisis</h3>
        <div className="card-statement">
        <p>🎓 <strong>10M+ Fake Degrees</strong> Sold Annually</p>
        <p>💰 <strong>$20B Fake Credential Market</strong> Worldwide</p>
        <p>🔍 People Falsify <strong>CVs & LinkedIn Profiles</strong></p>
        </div>
      </div>

      {/* Solution Section */}
      <div className="card-section solution">
        <FaShieldAlt className="icon secure" />
        <h3 className="section-title">The Blockchain Solution</h3>
        <div className="solution-box">
          <div className="solution-item">
            <GrFormCheckmark className="mini-icon" />
            <p><strong>e-Seal Layer:</strong> Credentials recorded on-chain</p>
          </div>
          <div className="solution-item">
            <GrFormCheckmark className="mini-icon" />
            <p><strong>e-Verify Layer:</strong> Instant authentication</p>
          </div>
        </div>
      </div>
     </div>
      {/* Benefits Section */}
      <div className="card-section benefits">
        <h3 className="section-title">Background Verification: Then vs Now</h3>
        <div className="benefit-grid">
          <div className="benefit-item">
            <FaGraduationCap className="mini-icon" />
            <p>Then:<span id="effect">⏳ Slow </span> <span>→</span> Now:<span id="effect">⚡Instant</span></p>
          </div>
          <div className="benefit-item">
            <GiReceiveMoney className="mini-icon" />
            <p> Then: <span id="effect">💸Costly</span> → Now: <span id="effect">💰 Cost-Effective</span></p>
          </div>
          <div className="benefit-item">
            <FaShieldAlt className="mini-icon" />
            <p> Then:<span id="effect">❌Fraud-Prone</span>  → Now:<span id="effect">✅Secure</span></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CVFeatures;
