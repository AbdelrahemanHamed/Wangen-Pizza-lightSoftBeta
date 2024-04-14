import React from 'react'
import "./contact.css"
import fourthSectionBG1 from "../../images/landing page images/fourth sectoin images/Capcicum 1.png"
import fourthSectionBG2 from "../../images/landing page images/fourth sectoin images/Clover 1.png"
import fourthSectionBG3 from "../../images/landing page images/fourth sectoin images/Gobi 1.png"
import fourthSectionBG4 from "../../images/landing page images/fourth sectoin images/Haldi 1.png"
import { useTheme } from '../../context'
import { Element } from 'react-scroll';
const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <div>
        
        <section id="reservation" className={!darkMode?"main-section fourth-section dark-mode":"main-section fourth-section"}>
         
          <form>
            <h3>Reservation</h3>
            <p>
              Buchen Sie Online Oder. <br /> Rufen Sie uns unter  +41 55 460 33 66 <br />
              zwischen 9:30  - 22:00 Uhr

            </p>
            <div className="form-control">
              <input type="text" id="name" placeholder='Name' />
            </div>
            <div className="form-control">
              <input type="tel" id="telefone"  placeholder='Telefon'/>
            </div>
            <div className="form-control">
              <input type="email" id="email" placeholder='Email' />
            </div>
            <div className="form-control">
              <input type="text" id="date&timer" placeholder='Anzaani Personen' />
            </div>
            <div className="form-control">
              <input type="data" id="data" placeholder='Datum' />
              <input type="text" id="date&timer" placeholder='Uhrzeit' />
            </div>
            <button className="btn-reservation">senden</button>
          </form>
            
          <img className="bg1" src={fourthSectionBG1} alt="Clover" />
          <img className="bg2" src={fourthSectionBG2} alt="Haldi" />
          <img className="bg3" src={fourthSectionBG3} alt="Capcicum" />
          <img className="bg4" src={fourthSectionBG4} alt="Gobi" />
        </section>
    </div>
  )
}

export default Contact