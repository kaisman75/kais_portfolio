import React ,{useState, useContext} from 'react'
import "./Navbar.scss"
import images from '../../constants/images'
import { HiMenu,HiXCircle } from "react-icons/hi";
import{FaHome,FaLaptopCode,FaRegMoon} from "react-icons/fa"
import{FiSun} from "react-icons/fi"
import{BsFillPersonLinesFill} from "react-icons/bs"
import{IoIosAlbums} from "react-icons/io"
import{MdContactMail} from "react-icons/md"
import { motion } from "framer-motion"
import { ThemeContext } from '../../constants/Context';
 



  
const Navbar = () => {
  const {theme,toggleTheme}=useContext(ThemeContext) 
  const [toggle, setToggle] = useState(false);
  const [toggleImg,setToggleImg]=useState(false)
  
  const handleTheme=()=>{
    
    toggleTheme(theme);
    setToggleImg(!toggleImg)
    
  }
  return (
 
    <nav className='app__navbar'>
        <div className='app__navbar-logo' >
            <img src={images.logo} alt="logo"/>
        </div>
        <ul  className="app__navbar-links">
              
              <li key="home">
                  <a href="/" onClick={() => setToggle(false)}>
                    <FaHome/>
                  </a>
              </li>
              <li key="about">
                  <a href="#about" onClick={() => setToggle(false)}>
                    <BsFillPersonLinesFill/>
                  </a>
              </li>
              <li key="works">
                  <a href="#work" onClick={() => setToggle(false)}>
                    <IoIosAlbums/>
                  </a>
              </li>
              <li key="Skills">
                  <a href="#skills" onClick={() => setToggle(false)}>
                    <FaLaptopCode/>
                  </a>
              </li>
              <li key="contact">
                  <a href="#contact" onClick={() => setToggle(false)}>
                    <MdContactMail/>
                  </a>
              </li>
           
            </ul>
            <div className='app__navbar-menu'>
            <HiMenu onClick={() => setToggle(true)} />

{toggle && (
  <motion.div
    whileInView={{ x: [300, 0] }}
    transition={{ duration: 0.99, ease: 'easeOut' }}
  >
    <HiXCircle onClick={() => setToggle(false)} />
    <ul>
      {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
        <li key={item}>
          <a href={`#${item}`} onClick={() => setToggle(false)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
)}
           
            </div>

            <div className='app__theme'>
                    <a onClick={handleTheme}>{toggleImg?<FiSun style={{color:"white"}}/>:<FaRegMoon style={{color:"black"}}/>}</a>
            </div>
          
    </nav>
    
  )
}

export default Navbar