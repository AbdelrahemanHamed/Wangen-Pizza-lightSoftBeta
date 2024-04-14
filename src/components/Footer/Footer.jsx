import React from "react";
import "./footer.css";
import logo from "../../images/footer/logo.png";
import faceIcon from "../../images/footer/facebook.png";
import XIcon from "../../images/footer/twitter 1.png";
import instagramIcon from "../../images/footer/instagram.png";
import image1 from "../../images/slider-footer-image/food1.png"
import image2 from "../../images/slider-footer-image/food2.png"
import image3 from "../../images/slider-footer-image/food3.png"
import image4 from "../../images/slider-footer-image/food4.png"
import Right from "../../images/slider-footer-image/Group 34.png"
import Left from "../../images/slider-footer-image/Group 51.png"
import MapLocation from "../../components/Map/Map"
import {CATEGORIES} from "../../utils/menuList"
import { useTheme } from "../../context";
import { Link } from "react-router-dom";
const Footer = () => {
  const { darkMode } = useTheme();
  return (
  <>
  
  
  <MapLocation darkMode={darkMode}/>
  <footer>
     
     <div className="footer">
    <div className="images">
      <img src={logo} alt="" className="logo" />
      <div className="line"></div>
     <div className="list">
      <img className="arrow" src={Left} alt="" />
     <img  src={image2} className="gallery"  alt="" />
      <img src={image3}  className="gallery" alt="" />
      <img src={image1}  className="gallery" alt="" />
      <img src={image4}  className="gallery" alt="" />
      <img src={Right} className="arrow"  alt="" />
      <div className="line2"></div>
     </div>
    </div>
    <div className="menu">
      <div className="about1">
        <h3>About Us</h3>
        <p>
        Willkommen beiWangen Pizza und Kebab Kurier! Geniessen Sie unsere
        köstlichen Speisen mit nur 4 einfachen Schritten. Ihre Bestellungen
        werden mit höchster Priorität bearbeitet und direkt durch unseren
        zuverlässigen Lieferdienst zu Ihnen gebracht. Erleben Sie
        unkomplizierten Genuss, ohne das Haus zu verlassen. Bestellen Sie jetzt
        und freuen Sie sich auf eine prompte Zustellung Ihrer Lieblingsspeisen!
        </p>
        <div className="social-icons">
          <a href=""> <img  className="social-icons-single" src={faceIcon} alt="" />      </a>
          <a href=""> <img className="social-icons-single" src={instagramIcon} alt="" />  </a>
          <a href=""> <img className="social-icons-single" src={XIcon} alt="" />          </a>
        </div>
      </div>
      <div className="menuLink">
        <Link to="/menu"><h3>Menu</h3></Link>
        <div className="category">
        {CATEGORIES.map((category)=>{
          return(
            <Link to={`/new/${category.id}?sub-cat=${category.subCat[0].id}`}>
            <p
              key={category.id}     
                  > {category.name}
                   </p>
         </Link>
         
          )
        })}
          </div>
    </div>
    
     <div className="Öffnungszeiten-style">
    <h3>Öffnungszeiten</h3>
    <div className="Öffnungszeiten-cont">
       <div className="Öffnungszeiten-row"> 
       <p>Mo. - Do.</p>
           <p>Fr. - Sa.</p>
           <p>So. </p>
       </div>
   <span className="space"></span>
       <div className="Öffnungszeiten-row"> 
           <p>11.00 - 22.00 Uhr  </p>
           <p>11.00 - 23.00 Uhr</p>
           <p>11.00 - 22.00 Uhr</p>
       </div>
      </div>
    </div>

    <div className="Liferzeiten-style">
    <h3>Liferzeiten</h3>
    <div className="Liferzeiten-cont">
       <div className="Liferzeiten-row"> 
       <p>Mo. - Do.</p>
           <p>Fr. - Sa.</p>
           <p>So. </p>
       </div>
       <span className="space"></span>
       <div className="Liferzeiten-row"> 
           <p>11.00 - 22.00 Uhr</p>
           <p>11.00 - 22.00 Uhr</p>
           <p>11.00 - 22.00 Uhr</p>
       </div>
      </div>
    </div>



     
   
    </div>
    </div>
      <div className="copy-right-cont">
        <h2>© </h2>
        <p className="copyRight"> 2024, Alle Rechte vorbehalten, Wangen Pizza, Kebab und Kurier. Entwickelt von Lightsoft</p>
      </div>
   </footer>
  </>
  );
};

export default Footer;
