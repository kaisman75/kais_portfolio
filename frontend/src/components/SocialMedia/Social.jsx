import React from 'react'
import "./Social.scss"
import {FaFacebook ,FaLinkedin} from 'react-icons/fa'
import{CgTwitter} from 'react-icons/cg'
import{BsGithub} from 'react-icons/bs'
import {motion} from 'framer-motion'



const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };  
  
const Social = () => {
  return (
    <div 
 
    
        
    className='app__Social'>
        <div className='line-up'/>
        <motion.a
          whileInView={{ y: [-170, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        ><FaFacebook/></motion.a>
        <motion.a
         whileInView={{ y: [-170, 0], opacity: [0, 1] }}
         transition={{ duration: 1.5 }}
        ><CgTwitter/></motion.a>
        <motion.a
         whileInView={{ y: [-170, 0], opacity: [0, 1] }}
         transition={{ duration: 2 }}
        ><BsGithub/></motion.a>
        <motion.a
         whileInView={{ y: [-170, 0], opacity: [0, 1] }}
         transition={{ duration: 2.5 }}
        ><FaLinkedin/></motion.a>
        <div className='line-down'/>
    </div>
  )
}

export default Social