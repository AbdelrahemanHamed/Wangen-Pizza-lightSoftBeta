import React from 'react'
import "./newmenu.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroMenu from '../NewMenu/HeroMenu'
import MenuList from './menulist/MenuList'
const NewMenu = () => {
  return (
    <>
  <div style={{backgroundColor:"rgba(0,0,0,.9)", width:"100%", height:"132px"}}>
     <Navbar/>
     </div>
     <div className="new-menu">
      <HeroMenu/>
      <MenuList/>
      </div>
    </>
    
  )
}

export default NewMenu