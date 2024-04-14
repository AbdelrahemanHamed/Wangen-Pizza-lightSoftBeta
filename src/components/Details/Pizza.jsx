import React from 'react'
import "./pizza.css"
import PizzaImage from "../../images/landing page images/third section images/hands-taking-pizza 1.png"
// import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context'
const Pizza = () => {
  const { darkMode } = useTheme();
  return (
    <>
    
<section className={!darkMode?"dark-mode-pizza  main-section third-section ":"main-section third-section"}>
          <h2>
            <span>Die beliebtesten  </span> Pizzen dieses Monats sind:
            <br />
          </h2>
          <img className="pizza-image" src={PizzaImage} alt="image" />
          <div className="separator"></div>
          <ul>
            <li>Pizza Margherita</li>
            <li>Pizza Pepperoni</li>
            <li>Pizza Prosciutto e Funghi</li>
            <li>Pizza Quattro Stagioni</li>
            <li>Pizza Diavola</li>
            <li>Pizza Hawaii</li>
          </ul>
        <div className='btn-group'>
        <button className="pizza-btn order-online-now-btn">
            Jetzt, Online bestellen...
          </button>
          <button className="pizza-btn see-our-menu-btn">
            <a to="/menu" className="see-our-menu-link">
              Siehe unsere Speisekarte.
            </a>
          </button>
        </div>
        </section>

    </>
  )
}

export default Pizza