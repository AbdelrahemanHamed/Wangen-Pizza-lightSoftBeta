import React from 'react'
import "./hero.css"
import Navbar from "../../components/Navbar/Navbar"
import SliderAng from './SliderAng'
import Ang from './Ang'
import Footer from "../../components/Footer/Footer"
import Dark_mood from "../../images/landing page images/navbar images/dark.png"
import light_mode from "../../images/landing page images/navbar images/light.png"
import { useTheme } from '../../context'
const Hero = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <>
     <div style={{backgroundColor:"rgba(0,0,0,.9)", width:"100%", height:"132px"}}>
     <Navbar/>
     </div>
     <div className={`hero`}>
      <h1 className="hero-title">Angebote</h1>
      <p>Profitieren Sie vox unseren tägCicAen Ange60tex!</p>
      <div className="toggle-btn">
    <img src={!darkMode?light_mode:Dark_mood} alt="" className="dark-image-mode" onClick={()=>{toggleDarkMode()}} />
  </div>
    </div>
    <div className={`container-slider ${darkMode?"dark-mode":""}`}>
      <SliderAng/>
    </div>
    <div className={`pizza-offer ${darkMode?"dark-mode":""}`}>
      <div className="left-side">
          <Ang/>
          <Ang/>
          <Ang/>
      </div>
    
      <div className="right-side">
      <Ang/>
      <Ang/>
      <Ang/>
      </div>
    </div>
    <div className={`container-slider ${darkMode?"dark-mode":""}`}>
      <SliderAng/>
    </div>
    <Footer/>
    </>
   
  )
}

export default Hero