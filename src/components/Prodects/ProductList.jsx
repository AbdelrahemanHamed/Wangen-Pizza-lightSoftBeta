import React, { useEffect, useState } from 'react'
import "./product.css"
import Item from './Item'
import OwlCarousel  from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.min.css"
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Card from '../show/Card'
import Pizza from '../Details/Pizza'
import Contact from "../contact/Contact"
import { useTheme } from '../../context'
import Newsection from '../NewComponent/Newsection'
import { Link } from 'react-router-dom'
import Slider from '../slide-footer/Slider'
import Section5 from '../NewSections/Section5'
import Section6 from '../NewSections/Section6'
import Section7 from '../NewSections/Section7'
import Section4 from '../NewSections/Section4'
const ProductList = () => {

  const { darkMode } = useTheme();
  return (
   <>
      <div className={!darkMode ? 'product dark-mode' : ' product white-mode'}>
      <h1>Merkmale des Produkts</h1>
       <div className="view">
       <Link to="/new"><p>Ansicht-Menü</p></Link>
       </div>

 <Slider/>

    </div>
<Card/>
<Section5/>
<Pizza isDark={darkMode}/>
<Section4/>
<Section7/>
<Section6/>
<Newsection/>
|<Contact/>

   </>
  )
}

export default ProductList

