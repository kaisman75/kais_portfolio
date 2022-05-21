import React,{useState,useContext} from 'react';
import './App.scss';
import {About,Footer,Header,Work,Skills} from "./containers"
import{Navbar} from "./components"
import {ThemeContext} from"../src/constants/Context"
function App() {
  const {theme}=useContext(ThemeContext)
 
  return (

    <div className={theme}>
    <Navbar />  
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Footer/> 
    </div>
  );
} 

export default App;
