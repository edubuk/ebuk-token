import React, { useEffect, useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import './Preloader.css'
import Waves from './../Waves/Waves';

const Preloader = ({onLoaded}) => {
    const [text, setText] = useState("");
    const [visible, setVisible] = useState(true);
    const fullText = "Welcome to the future of trust in education and employment. ";

    useEffect(()=>{
        let i=0;

        const typingInterval = setInterval(()=>{
            if(i<fullText.length)
            {
                setText(fullText.slice(0, i + 1));
                i++;
            }
            else{
                clearInterval(typingInterval);
                setTimeout(()=>{
                    setVisible(false);
                    onLoaded();
                },1000)

            }
        },50) 
        return () => clearInterval(typingInterval);
        //eslint-disable-next-line
    },[])
  return (
    <div className='preloader-container'>
    <Waves
                lineColor="#008888"
                backgroundColor="transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
                style={{ position: "absolute", top: 0, left: 0, zIndex: "-1000", opacity: 0.5 }}
            />
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{opacity:{ duration: 1 }}}
        >
          <p className='loader-text'>{text}</p>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  )
}

export default Preloader
