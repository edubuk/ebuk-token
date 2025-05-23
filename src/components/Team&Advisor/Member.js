import React from 'react'
import './Member.css'
import team1 from '../../assets/Team/team1.png'
import team2 from '../../assets/Team/team2.png'
import team3 from '../../assets/Team/team3.png'
import team4 from '../../assets/Team/team4.png'
import advisor1 from '../../assets/Advisor/advisor1.png'
import advisor2 from '../../assets/Advisor/advisor2.png'
import advisor3 from '../../assets/Advisor/advisor3.png'
import advisor4 from '../../assets/Advisor/advisor4.png'
import { FaLinkedin } from 'react-icons/fa'

const Member = () => {
  return (
    <div className='member-container'>
      <div className="team-section">
    <h2 className="gradient-text">Meet Our Executives</h2>
    <div className="members">
      <div className='member'>
      <div className='member-img-wrapper'>
        <img src={team1} alt="CEO Img" className="member-img"></img>
        </div>
        <div className="member-content">
        <p className="member-name">Apoorva Bajaj</p>
        <p className="member-badge">Co-Founder & CEO</p>
        <a href='https://www.linkedin.com/in/apoorva-bajaj-iit-iim-cfa-edubuk/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
        <p className="member-description">10+ years experience <br></br>ex-Goldman Sachs, JP Morgan, DE Shaw Engineer, IIT, IIM Gold-medalist, CFA Charterholder</p>
        </div>
      </div>
      <div className='member'>
      <div className='member-img-wrapper'>
        <img src={team2} alt="CEO Img" className="member-img"></img>
        </div>
        <div className="member-content">
        <p className="member-name">Shivaani Mehrotra</p>
        <p className="member-badge">Co-Founder & COO</p>
        <a href='https://www.linkedin.com/in/shivani-mehrotra-edubuk/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
        <p className="member-description">10+ years experience in <br></br>Education Sector as University Professor MBA + University Topper, Women in AI APAC Finalist</p>
        </div>
      </div>
      {/* <div className='member'>
        <img src={team3} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Amit Srivastava</p>
        <p className="member-tag">Chief Marketing Officer (CMO)</p>
        <p className="member-tag">20+ years experience in <br></br> marketing and sales in Education & Finance sector. MBA in International Business.</p>
      </div> */}
      <div className="member">
  <div className="member-img-wrapper">
    <img src={team3} alt="CEO Img" className="member-img" />
  </div>
  <div className="member-content">
  <p className="member-name">Amit Srivastava</p>
  <span className="member-badge">Chief Marketing Officer</span>
  <a href='https://www.linkedin.com/in/amit-srivastava-62969352/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
  <p className="member-description">
    20+ years experience in <br /> marketing and sales in Education & Finance sector. MBA in International Business.
  </p>
  </div>
</div>
      <div className='member'>
      <div className='member-img-wrapper'>
        <img src={team4} alt="CEO Img" className="member-img"></img>
        </div>
        <div className="member-content">
        <p className="member-name">Ajeet Ram Verma</p>
        <p className="member-badge">Tech Lead Developer</p>
        <a href='https://www.linkedin.com/in/ajeet-ram-verma-953605244/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
        <p className="member-description">5+ years of experience in Core Technology Domain <br></br>MERN Full-Stack <br></br>Python-AI & ML <br></br>Solidity & Rust</p>
        </div>
      </div>
    </div>
    </div>
    <div className="team-section">
    <h2 className="gradient-text">Meet Our Advisors</h2>
    <div className="members">
      <div className='member'>
      <div className='member-img-wrapper'>
        <img src={advisor1} alt="CEO Img" className="member-img"></img>
        </div>
        <div className="member-content">
        <p className="member-name">Ish Anand</p>
        <p className="member-badge">Serial Entrepreneur, Advisor in Startups, Global Citizen</p>
        <a href='https://www.linkedin.com/in/ishanand/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
        <p className="member-description">30 years + of experience in Corporates, the Startup Ecosystem and as an Enterpreneur across 5 continents</p>
        </div>
      </div>
      <div className='member'>
      <div className='member-img-wrapper'>
        <img src={advisor2} alt="CEO Img" className="member-img"></img>
        </div>
        <div className="member-content">
        <p className="member-name">Dr. Narsing Rao, GS</p>
        <p className="member-badge">Former VC at ICFAI University</p>
        <a href='https://www.linkedin.com/in/dr-narsing-rao-gs-a318735/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
        <p className="member-description">30 years + of experience in Education Sector as Vice Chancellor & Chief Mentor at Indian Universities ex-Professor</p>
        </div>
      </div>
      <div className='member'>
      <div className='member-img-wrapper'>
        <img src={advisor3} alt="CEO Img" className="member-img"></img>
        </div>
        <div className="member-content">
        <p className="member-name">Dr. Sindhu Bhaskar</p>
        <p className="member-badge">Co-Founder, EST Global, Forbes Council Member</p>
        <a href='https://www.linkedin.com/in/dr-sindhu-bhaskar-55a84568/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
        <p className="member-description">Established $100M+ business in Education sector. Co-Founded Fintech & Blockchain Association (FAB), US</p>
        </div>
      </div>
      <div className='member'>
      <div className='member-img-wrapper'>
        <img src={advisor4} alt="CEO Img" className="member-img"></img>
        </div>
        <div className="member-content">
        <p className="member-name">James Wren</p>
        <p className="member-badge">Lead BD, Liquidium</p>
        <a href='https://www.linkedin.com/in/james-wren-15b8b759/' target='_blank' rel='noreferrer'><FaLinkedin className="social-icons"/></a>
        <p className="member-description">7+ years experience in Web3, Blockchain Degen & influencer in the BTC Ecosystem</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Member
