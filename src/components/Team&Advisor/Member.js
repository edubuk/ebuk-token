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

const Member = () => {
  return (
    <div className='member-container'>
      <div className="team-section">
    <h2 className="member-header">Meet Our Executives</h2>
    <div className="members">
      <div className='member'>
        <img src={team1} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Apoorva Bajaj</p>
        <p className="member-tag">Chief Executive Officer (CEO)</p>
      </div>
      <div className='member'>
        <img src={team2} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Shivaani Bajaj</p>
        <p className="member-tag">Chief Operating Officer (COO)</p>
      </div>
      <div className='member'>
        <img src={team3} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Amit Srivastava</p>
        <p className="member-tag">Chief Marketing Officer (CMO)</p>
      </div>
      <div className='member'>
        <img src={team4} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Ajeet Ram Verma</p>
        <p className="member-tag">Lead Tech Developer</p>
      </div>
    </div>
    </div>
    <div className="team-section">
    <h2 className="gradient-text">Meet Our Advisors</h2>
    <div className="members">
      <div className='member'>
        <img src={advisor1} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Ish Anand</p>
        <p className="member-tag">Serial Entrepreneur, Advisor in Startups, Global Citizen</p>
      </div>
      <div className='member'>
        <img src={advisor2} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Dr. Narsing Rao, GS</p>
        <p className="member-tag">Former VC at ICFAI University</p>
      </div>
      <div className='member'>
        <img src={advisor3} alt="CEO Img" className="member-img"></img>
        <p className="member-name">Dr. Sindhu Bhaskar</p>
        <p className="member-tag">Co-Founder, EST Global, Forbes Council Member</p>
      </div>
      <div className='member'>
        <img src={advisor4} alt="CEO Img" className="member-img"></img>
        <p className="member-name">James Wren</p>
        <p className="member-tag">Advisor: Blockchain & Web3</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Member
