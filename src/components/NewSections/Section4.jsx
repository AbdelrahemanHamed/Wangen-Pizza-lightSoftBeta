import React from 'react'
import "./section4.css"
import { useTheme } from '../../context'
const Section4 = () => {
    const { darkMode } = useTheme();

  return (
    <div className={`section4 ${!darkMode?"dark-mode":""}`}>
       <div className="text-section4">
       <h1>Liefergebiete</h1>
        <p>Mindestbestellwert für Lieferungen</p>
       </div>
         <div className="all-content">
            <div className='wangen-8'>
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>       
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>       
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>
            </div>
            <div className='Chf line-chf'>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>

            </div>
            <div className='wangen-8'>
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>       
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>       
                <p>8855 Wangen</p>
                <p>8855 Wangen</p>
            </div>
            <div className='Chf'>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>
                <p>ab CHF 10.00</p>

            </div>
         </div>



    </div>
  )
}

export default Section4