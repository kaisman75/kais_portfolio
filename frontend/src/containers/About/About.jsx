import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {images} from "../../constants"
import {AppWrap} from '../../Wrapper';
import {urlFor, client } from '../../Client';
import './About.scss';



const About = () => {
  const [abouts,setAbouts]=useState([]);

 

  useEffect(()=>{
    const query='*[_type == "abouts"]';
    client.fetch(query)
    .then((data)=>{setAbouts(data)})
  },[])

  return (
    <div className='app__about'>
      
   
      <div className="app__profiles">
      
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
       
        
      </div>
      <div className='app__About-section'>
          <div className='img-section'>
            <img src={images.profile2} alt="myProfile"/>
          </div>
          <div className='p-section'>
          <h2 className="head-text">I Know that <span>Good Dev</span> <br />means  <span>Good Business</span></h2>
            <p>
            With a professional experience of more than five years as a civil
            servant, I acquired an excellent command of the computer tool,
            passionate about web development , I know how to adapt quickly in order to meet the
            time constraints imposed on me, I am a young serious family man who
            is punctual and organized. Responsible and voluntary, I am convinced
            that our collaboration would be a great success. I remain at your
            entire disposal to provide you with any further information .
          </p>
          </div>
         
      </div>
    </div>
  );
};

export default AppWrap(About ,'about');
 
