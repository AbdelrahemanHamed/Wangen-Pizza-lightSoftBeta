import React, { useEffect, useState } from 'react'
import "./section5.css"
import Ang from "../../Pages/Angebote/Ang"
import Logo from "../../images/New-menu/wangen (1) 4.png"
import { useTheme } from '../../context'
const Section5 = () => {
    const [white,setWhite]=useState(true)
    const { darkMode } = useTheme();
  return (
    <div className={`section5 ${!darkMode?"dark-mode":""}`}>
        <div className="left-side-section5">
             <div className="logo-section5"><img src={Logo} alt="" />
               <h1 className='first-title'>Bestes</h1>
                  <h1 className='second-title' >Angebot</h1>
             </div>
            <div className="card-left-side">
            <Ang white={white}/>
            </div>
        </div>
        <div className="right-side-section5">
             <Ang white={white}/>
             <Ang white={white}/>
             <Ang white={white}/>
        </div>

    </div>
  )
}

export default Section5