import React from 'react'
import { useTheme } from '../../context'
import "./about.css"
import About_image from "../../images/landing page images/second section images/aboutimage (2).png"
const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className={!darkMode ? 'about dark-mode' : ' about white-mode'}>
        <div className="image">
<img src={About_image} alt="" />
        </div>
        <div className="text">
   <h2>Ein gemütlicher Ort für kulinarischen Genuss.</h2>
   <p>Für ein unvergleichliches Wohlfühlessen <br /> empfehlen wir stets eine Kombination aus Gemüse, <br /> Maisbrot und köstlich Frittiertem.<br />
   </p>
    <button className="about-btn">estellen</button>
        </div>

    </div>
  )
}

export default About