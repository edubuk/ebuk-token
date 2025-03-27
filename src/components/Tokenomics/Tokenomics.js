import React, { useEffect } from 'react'
import './tokenomic.css'
import { PieChart } from 'react-minimal-pie-chart';
import AOS from "aos";
import "aos/dist/aos.css";

const Tokenomics = () => {

    const data = [
        { title: "Pre-Seed Sale", value: 2.5, color: "#006666" }, 
        { title: "Seed Sale", value: 5, color: "#00AAAA" },
        { title: "Pre-Sale 1", value: 5.5, color: "#ADD8E6" },  
        { title: "Pre-Sale 2", value: 7, color: "#F8F8F8" },  
        { title: "Public Sale", value: 20, color: "rgb(0, 123, 255)" },  
        { title: "Airdrop", value: 5, color: "#007070" },  
        { title: "Marketing", value: 5, color: "#008888" },  
        { title: "Ecosystem", value: 9, color: "#9AC7E6" },  
        { title: "Founders", value: 5, color: "#FFFFFF" },  
        { title: "Team", value: 5, color: "rgb(0, 120, 250)" }, 
        { title: "Scholarships", value: 8, color: "#00cccc" },  
        { title: "Infrastructure", value: 9, color: "#009999" },  
        { title: "Treasury", value: 7, color: "#90C8E6" },  
        { title: "Liquidity", value: 7, color: "rgb(0, 115, 245)" },  
      ];

        useEffect(() => {
          AOS.init({ duration: 2000 }); // Animation duration and one-time trigger
        }, []);
      
  return (
    <div className='tokenomics-container' id="tokenomics" data-aos="fade-left">
    <div>
        <h1 className="gradient-text" id="how-to-buy">Edubuk "EBUK" Tokenomics</h1>
    </div>
    <div className='tokenomics-info'>
        <p>Tokenomics (a blend of “token” and “economics”) refers to the economic model and design principles underlying of Edubuk Project. It encompasses how a token distributed, and used within its ecosystem, as well as the incentives it offers to participants. Tokenomics aims to balance supply and demand while ensuring the token’s value and utility are sustainable over time. for more detail about tokenomics pls refer to whitepaper.</p>
    </div>
    <h3 className='tokenomics-supply'>Total Supply - 10 Bn</h3>
    <div className='tokenomics'>
    <div className='tokenomics-data'>
{data.map((data,i)=>
    <p key={i+1}><span id='tokenomics-dot' style={{backgroundColor:`${data.color}`}}></span>{data.title}</p>
)}
</div>
    <div>
    <PieChart
        animate={true}
        animationDuration={2000}
        data={data}
        label={({ dataEntry }) => `${dataEntry.value}%`}
        labelStyle={{
          fontSize: "5px",
          fontFamily: "sans-serif",
          fill: "#FFFFFF",
        }}
        radius={35}
        labelPosition={105}
        className='pichart'
      />
</div>
</div>
<div>
</div>
    </div>
  )
}

export default Tokenomics
