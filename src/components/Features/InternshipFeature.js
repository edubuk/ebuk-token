import React from "react";
import { FaRocket, FaPenNib, FaVideo, FaPalette, FaCode, FaHandshake, FaTrophy } from "react-icons/fa";
import "./Feature.css";

const cardsData = [
  {
    title: "Edubuk Internship Championship",
    description: "Transforming internships into an adventure of learning, challenges & rewards!",
    icon: <FaRocket className="icon" />,
    cta: "Join Now",
  },
  {
    title: "Viral Maverick (Marketing)",
    description: "Gain followers, create viral memes, maximize Twitter engagement & earn cash prizes.",
    icon: <FaRocket className="icon" />,
    cta: "Start Marketing",
  },
  {
    title: "Content Alchemist (Writing)",
    description: "Write blogs, ghostwrite, and create AI-generated eBooks.",
    icon: <FaPenNib className="icon" />,
    cta: "Start Writing",
  },
  {
    title: "Visual Titans (Video Creation)",
    description: "Create explainer videos, viral reels, and animations.",
    icon: <FaVideo className="icon" />,
    cta: "Start Creating",
  },
  {
    title: "Design Gladiators (Designing)",
    description: "Design marketing materials, posters, and NFT-style artwork.",
    icon: <FaPalette className="icon" />,
    cta: "Start Designing",
  },
  {
    title: "Tech Wizards (Technology)",
    description: "Develop NLP-based tools, boost Azure usage.",
    icon: <FaCode className="icon" />,
    cta: "Start Coding",
  },
  {
    title: "Dealmakers (Business Development)",
    description: "Secure partnerships with colleges & schools.",
    icon: <FaHandshake className="icon" />,
    cta: "Start Networking",
  },
  {
    title: "Ultimate Grand Prizes",
    description: "Win PPOs, Free CV on Chain, EBUK Tokens & Mentorship!",
    icon: <FaTrophy className="icon" />,
    cta: "Be a Champion",
  },
];

const InternshipFeatur = () => {
  return (
    <div className="ceta-box">
    <p id="card-number">4</p>
    <h2 className="card-header">Edubuk Internship Championship: The Ultimate Challenge</h2>
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          {card.icon}
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <button className="cta-button">{card.cta}</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default InternshipFeatur;
