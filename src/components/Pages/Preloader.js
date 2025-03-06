import React, { useEffect, useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import './Preloader.css'

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
                },1500)

            }
        },50) 
        return () => clearInterval(typingInterval);
        //eslint-disable-next-line
    },[])
  return (
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
  )
}

export default Preloader
