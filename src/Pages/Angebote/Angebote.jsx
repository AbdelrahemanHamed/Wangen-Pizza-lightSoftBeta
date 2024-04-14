import React from 'react'
import Hero from './Hero'
import WhatsappIcon from "../../images/WhatsApp_icon.png"


const Angebote = () => {

  return (
    <div className='angebote'>
    <a href="#"><img src={WhatsappIcon} className="WhatsappIcon" alt="" /></a>
     <Hero/>
    
   
    </div>
    
  )
}

export default Angebote