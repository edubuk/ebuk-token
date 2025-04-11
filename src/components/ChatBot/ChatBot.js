// src/components/Chatbot.jsx
import React, { useState, useEffect } from "react";
import "./ChatBot.css";
import { FaInstagram, FaLinkedin, FaTelegram,FaYoutube } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";

// Hardcoded data replacing API
const chatbotData = {
        "layer_1": {
          "About EDUBUK": {},
          "Edubuk's CV-on-Chain": "https://www.youtube.com/watch?v=-EEe8-ogkwY&t=160s",
          "Edubuk's CETA": "https://www.youtube.com/watch?v=CsrP58BXpTA&t=145s",
          "Edubuk's Olympiad": "https://www.youtube.com/watch?v=fL4GB7rie54&t=167s",
          "Awards won by EDUBUK": "https://www.youtube.com/watch?v=5Cb6g7EEzAk&t=2s",
          "EBUK TOKEN": {},
          "Utility of EBUK TOKEN": {},
          "EBUK Tokenomics": {},
          "For more queries, Contact Us": {}
        },
        "layer_2": {
          "About EDUBUK": {
            "What is Edubuk?": "Edubuk is an AI-powered, blockchain-based learning and credentialing platform that helps learners acquire industry-relevant skills and earn verifiable digital certificates. It bridges the gap between education and employment by offering no-code/low-code courses and blockchain-backed credentials.",
            "What is the eSeal dApp?": "The eSeal decentralized application (dApp) allows users to digitally record and verify educational transcripts and work-experience certificates on the blockchain, ensuring a transparent and tamper-proof background verification process.",
            "How does the certificate verification process work?": "The verification process involves uploading a certificate file to the Verifier tool, which calculates its hash value and checks it against records stored on Edubuk's smart contract on the blockchain. A match confirms the certificate's authenticity.",
            "What is the CETA Program?": "The Certified Emerging Technologies Analyst (CETA) Program offers courses in high-demand emerging technologies, structured across Fundamental, Intermediate, and Expert levels, accessible to learners aged 15 to 60+ from all academic backgrounds without prior coding experience.",
            "Who can enroll in the CETA Program?": "Learners aged 15 to 60+ from all academic backgrounds can enroll in the CETA Program; no prior coding or computer science experience is required.",
            "What technologies are covered in the CETA Program?": "The CETA Program covers Artificial Intelligence (AI) & Machine Learning, Blockchain & Distributed Ledger Technology, Cybersecurity, Cloud Computing, Data Science, Robotics & Drones, Internet of Things (IoT) & Internet of Behavior (IoB), Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR) & Metaverse, and 3D Printing.",
            "How does Edubuk ensure the security of recorded certificates?": "Edubuk uses blockchain technology to store certificates, providing a transparent and tamper-proof system that ensures the authenticity and security of recorded documents.",
            "What collaborations has Edubuk established?": "Edubuk has collaborated with organizations such as the International Education Evaluation (IEE), National Skills Development Corporation (NSDC), and EST Global, enhancing its services and expanding its reach.",
            "What awards and recognitions has Edubuk received?": "Edubuk's model has been recognized globally, including being named Best Edtech Startup (Jury’s Choice) at the G20 Summit in Indonesia (2022), and acknowledged by organizations like CNN, Financial Times, MIT, Harvard University, and the World Economic Forum.",
            "How does Edubuk ensure the authenticity of digital certificates?": "Edubuk uses blockchain technology to issue tamper-proof digital credentials. These certificates are stored on Ethereum, Polygon, or Hyperledger, ensuring they cannot be altered or forged. Employers can verify them instantly, eliminating fake credentials.",
            "What courses does Edubuk offer?": "Edubuk provides structured courses in emerging technologies, including Artificial Intelligence & Machine Learning, Blockchain & Distributed Ledger Technology, Cybersecurity, Cloud Computing, Data Science, Internet of Things (IoT) & Internet of Behavior (IoB), Augmented Reality (AR), Virtual Reality (VR), Metaverse, Robotics, 3D Printing, and more.",
            "Who can benefit from Edubuk?": "Edubuk is designed for students & job seekers to gain in-demand tech skills and earn verifiable credentials, universities & training institutes to issue blockchain-backed digital certificates, and employers & recruiters to instantly verify candidates’ skills and qualifications.",
            "How does Edubuk help learners without coding experience?": "Edubuk offers no-code/low-code learning programs, making tech education accessible to non-programmers. Learners can gain job-ready skills without needing extensive coding experience.",
            "How does the AI-driven career mapping work?": "Edubuk uses AI-powered career mapping to analyze learners’ skills, identify gaps, and recommend personalized learning paths. It also connects learners with relevant job opportunities.",
            "What technologies are used in Edubuk’s platform?": "Edubuk integrates multiple advanced technologies, including Blockchain for immutable and verifiable credentials, Smart Contracts for automated certificate issuance and validation, Decentralized Storage (IPFS) for secure credential metadata, Web3 Authentication to prevent unauthorized certificate issuance, and AI-Based Learning Modules for personalized learning experiences.",
            "How does Edubuk help employers and recruiters?": "Employers can use Edubuk’s interactive web and mobile app to instantly verify candidates' skills and certifications, reduce recruitment time by eliminating manual verification, and ensure fraud-proof hiring by checking blockchain-backed credentials.",
            "What makes Edubuk different from other e-learning platforms?": "Edubuk stands out because of no-code/low-code learning, making tech skills accessible to all, blockchain-backed credentials providing trust and transparency, AI-driven personalized learning offering adaptive skill development, and instant verification helping recruiters hire faster with decentralized verification.",
            "How can I contact Edubuk for support and more queries?": "For assistance, you can reach Edubuk at support@edubuk.com."
        },
          "EBUK TOKEN": {
            "1. How do I sign up for purchasing EBUK tokens?": "To sign up, visit the Register page and create an account. After registering, check your email for an OTP sent from investment@edubukeseal.org and verify your email.",
            "2. Is KYC verification mandatory to purchase EBUK tokens?": "Yes, KYC verification is mandatory to comply with regulatory requirements and ensure a secure investment process.",
            "3. How do I complete KYC verification?": "After signing in to your account, navigate to your Dashboard and complete the KYC step by:\n\nTaking a live photo (liveliness check)\n\nUploading one government-issued ID (passport or valid national ID)\n\nThis process is handled securely by Synaps, a trusted third-party provider.",
            "4. What payment methods are available for purchasing EBUK tokens?": "You can purchase EBUK tokens using:\n\nFiat currency (AED) via SWIFT/IBAN bank transfer\n\nCryptocurrency (USDT or USDC) on the following networks:\n\nBinance Smart Chain (BEP-20)\n\nEthereum (ERC-20)\n\nPolygon\n\nSolana",
            "5. Where can I find payment details?": "Once your KYC is approved, payment details (bank account information and wallet addresses) will be available on the Payments Page in your Dashboard.",
            "6. How do I confirm my payment?": "After making the payment:\n\nTake a screenshot or download a PDF of the transaction confirmation.\n\nGo to the ‘Buy Tokens’ section in your Dashboard.\n\nFill out the payment form with the amount paid.\n\nEnter the referral code (if applicable) or type N/A if you don’t have one.\n\nUpload the payment confirmation and submit the form.",
            "7. How do I track my KYC and payment status?": "You can track your KYC Verification, Payment Status, and Token Transfer Status on the Status Page in your Dashboard.",
            "8. When will I receive my EBUK tokens?": "Once your KYC is verified and payment is confirmed, you will receive a confirmation email from investment@edubukeseal.org. Tokens will only be transferred after this confirmation email is sent.",
            "9. What should I do if I don’t receive a confirmation email?": "Check your spam or junk folders in case the email was filtered. If you still don’t see it, contact support.",
            "10. On which blockchain network is the EBUK token deployed?": "The EBUK token is deployed on the XDC Network.",
            "11. What token standard does the EBUK token follow?": "The EBUK token follows the XRC-20 token standard.",
            "12. What is the smart contract address of the EBUK token?": "The smart contract address of the EBUK token is 0x8d1a92ba51b469ad55720546fa38ba365112d067.",
            "13. What is the XRC-20 standard?": "XRC-20 is a token standard on the XDC Network, similar to Ethereum's ERC-20, used for creating and managing fungible tokens.",
            "14. Is the EBUK token compatible with Ethereum wallets?": "The EBUK token is based on the XDC Network and follows the XRC-20 standard, so it may require wallets that support XRC-20 tokens rather than standard Ethereum wallets.",
            "15. Who do I contact for support?" : "For any assistance, email support@edubuk.com. The support team typically responds within 12 hours, and always within 24 hours."
          },
          "Utility of EBUK TOKEN": {
            "1. What is the EBUK Token?": "The EBUK Token is a utility token designed for use within the Edubuk platform and ecosystem. It is not a security token, meaning its value and use are based solely on its functionality within the platform.",
            "2. What can I use EBUK tokens for?": "EBUK tokens can be used for:\n\n- Enrolling in CETA courses on AI, Generative AI, Blockchain, Cybersecurity, and Data Science.\n- Paying for diploma courses with Edubuk’s partner institutions (e.g., iCapital, LiOR Capital).\n- Registering CVs and Certificates on the blockchain via Edubuk’s dApp.\n- Participating in the International AI & Emerging Technologies Olympiad.\n- Booking mentorship sessions with industry experts.\n- Purchasing value-added courses on soft skills, communication, and professional development.",
            "3. Can I stake my EBUK tokens?": "Yes, investors can stake their EBUK tokens on Edubuk’s platform.",
            "4. What is the staking reward rate?": "Staking offers an Annual Percentage Yield (APY) of UPTO 10%.",
            "5. Are there any limits on staking rewards?": "Yes, there will be a maximum cap on absolute staking rewards per user. The exact details will be shared before the staking program begins.",
            "6. Is there a lock-in period for staking?": "Details regarding lock-in periods (if any) will be announced before the token listing.",
            "7. Is EBUK a security token?": "No, EBUK is strictly a utility token, and its value is derived from its usability within the Edubuk ecosystem.",
            "8. Where can I find more details about staking and token usage?": "Edubuk will provide official announcements with staking details, including reward limits and staking periods, before the token listing. Stay updated via Edubuk’s official website.",
            "9. Who can I contact for support?": "For any queries, reach out to support@edubuk.com."
          },
          "EBUK Tokenomics": {
            "1. What is the total supply of EBUK tokens?": "The total supply of EBUK tokens is 10 billion (10 Bn).",
            "2. How is the EBUK token supply distributed?": "The EBUK token supply is distributed among various categories, including:\n\n- Pre-Seed Sale\n- Seed Sale\n- Pre-Sale 1 & Pre-Sale 2\n- Public Sale\n- Airdrop\n- Marketing\n- Ecosystem\n- Founders\n- Team\n- Scholarships\n- Infrastructure\n- Treasury\n- Liquidity",
            "3. What is the purpose of the EBUK token?": "The EBUK token is a utility token designed for use within the Edubuk ecosystem, allowing users to pay for courses, mentorship sessions, certifications, and more.",
            "4. What percentage of tokens is allocated for liquidity?": "The liquidity allocation is 20% of the total supply.",
            "5. How much is allocated for public sale and pre-sales?": "\n- Public Sale: 7%\n- Pre-Sale 1 & 2: 2.5% and 5.5%, respectively",
            "6. Is there an allocation for scholarships?": "Yes, 8% of the total supply is allocated for scholarships.",
            "7. What is the purpose of the treasury allocation?": "The treasury allocation ensures long-term sustainability and supports ecosystem growth.",
            "8. How will the airdrop allocation be used?": "The airdrop allocation (5%) is used to reward early adopters and promote platform adoption.",
            "9. What is the percentage allocated to the team and founders?": "\n- Team: 5%\n- Founders: 5%",
            "10. Where can I find more details about EBUK tokenomics?": "For more details, refer to the whitepaper available on the official Edubuk website."
          },
      
        "For more queries, Contact Us": {
            " Whatsapp": "+91-9250411261",
            " Phone": "+91-9250411261",
            " Telegram": "@apoorvabajajcfa or @shivaanimehrotrabajaj",
            " Email": "support@edubuk.com or investment@edubukeseal.org"
        }
        }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [layer, setLayer] = useState("initial");
  const [chatBody, setChatBody] = useState(null);
  const [previousTopic, setPreviousTopic] = useState(null);

  useEffect(() => {
    console.log("Layer:", layer, "| IsOpen:", isOpen, "| ChatBody:", chatBody);
  }, [layer, isOpen, chatBody]);

  function toggleChat() {
    const opening = !isOpen;
    setIsOpen(opening);
    if (opening) {
      setLayer("initial");
      setChatBody(null);
    } else {
      setChatBody(null);
      setPreviousTopic(null);
      setLayer("initial");
    }
  }

  function loadLayer1() {
    setLayer("layer1");
    const buttons = Object.entries(chatbotData.layer_1).map(([topic, value]) => (
      <button
        className="chat-btn"
        key={topic}
        onClick={() => loadLayer2(topic, value)}
      >
        {topic}
      </button>
    ));
    setChatBody(buttons);
  }

  function loadLayer2(topic, value) {
    setLayer("layer2");
    setPreviousTopic(topic);

    if (typeof value === "string" && value.startsWith("http")) {
      setChatBody(
        <a
          href={value}
          className="chat-message"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Video
        </a>
      );
    } else {
      const topicData = chatbotData.layer_2[topic];
      if (!topicData) {
        setChatBody(<p>No detailed questions available for this topic.</p>);
        return;
      }

      const buttons = Object.entries(topicData).map(([question, answer]) => (
        <button
          key={question}
          className="chat-btn"
          style={{ width: "90%" }}
          onClick={() => showAnswer(question, answer)}
        >
          {question}
        </button>
      ));
      setChatBody(buttons);
    }
  }

  function showAnswer(question, answer) {
    setLayer("answer");
    setChatBody(
      <>
        <p className="question-text"><strong>{question}</strong></p>
        <p className="answer-text">{answer}</p>
      </>
    );
  }

  function handleBack() {
    if (layer === "answer" && previousTopic) {
      setTimeout(() => loadLayer2(previousTopic, chatbotData.layer_1[previousTopic]), 100);
    } else if (layer === "layer2") {
      setTimeout(() => loadLayer1(), 100);
    }
  }

  return (
    <>
      <div className="chat-widget" onClick={toggleChat}>💬</div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <button
                  className="back-button"
                  onClick={handleBack}
                  disabled={layer === "initial"}
                  style={{ visibility: layer === "initial" ? "hidden" : "visible" }}
                >
                  ←
                </button>
              </div>
              <span className="chatbot-title">Edubuk Bot</span><br></br>
              <CgCloseO onClick={toggleChat} id="close-icon"/>
            </div>
          </div>

          <div className="chat-body">
            {layer === "initial" && (
              <>
                <p className="initial-greeting">Hi ! 👋<br />How may I help you today?</p>
                <img src="edubuknewlogo.png" alt="Edubuk Logo" className="main-logo" />
              </>
            )}
            {chatBody}
          </div>

          <div className="chat-footer">
            <button onClick={loadLayer1} className="chat-btn">Chat with us</button>
            <SocialIcons />
          </div>
        </div>
      )}
    </>
  );
};

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://www.linkedin.com/company/edubuk-ai-web3/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://x.com/edubuktrust" target="_blank" rel="noopener noreferrer">
      <img src="X-logo.svg" alt="X" style={{ width: "22px", height: "20px" }} />
    </a>
    <a href="https://www.instagram.com/edubuk_/" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.edubukeseal.org/" target="_blank" rel="noopener noreferrer">
      <img src="logoIcon.svg" alt="Custom Icon" style={{ width: "27px", height: "27px" }} />
    </a>
    <a href="https://t.me/edubukofficial" target="_blank" rel="noopener noreferrer">
      <FaTelegram />
    </a>
    <a href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
  </div>
);

export default Chatbot;
