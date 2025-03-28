import React from 'react'
import ebuk from '../../assets/utilityEbuk.png'
import './EbukUtility.css'
const EbukUtility = () => {
  return (
    <div className='utility-container'>
      <img src={ebuk} alt="ebuk-utility"></img>
      <div className='paragraph'>
        <p>The EBUK Token is strictly a UTILITY TOKEN and NOT a SECURITY TOKEN. The value and use of the token are derived solely from its utility within the Edubuk platform and ecosystem. Key utilities of the EBUK Token include:</p>
        <p>
1. Learners across the globe will be purchasing EBUK tokens to enroll in Edubuk's CETA courses on AI, Generative AI, Blockchain, Cybersecurity, Data Science, Data Analytics, and Data Visualization.<br></br>
2. Learners will be able to pay for certain diploma courses with Edubuk’s partner institutions like iCapital, LiOR Capital, and others using EBUK tokens.<br></br>
3. Learners can use EBUK tokens to pay for registering their CVs and Certificates on the blockchain using Edubuk’s dApp.<br></br>
4. EBUK tokens will be used to pay for participation in the International AI & Emerging Technologies Olympiad conducted by Edubuk.<br></br>
5. EBUK tokens will be accepted as payment for booking specific mentorship sessions.<br></br>
6. EBUK tokens will also be used for purchasing value-added courses on soft skills, communication skills, and other professional development modules.</p>
      </div>
    </div>
  )
}

export default EbukUtility
