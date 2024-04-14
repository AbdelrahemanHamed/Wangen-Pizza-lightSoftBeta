import React, { Component, useEffect, useState } from "react";
import SliderMain from "react-slick";
import image1 from "../../images/menu images/KEBAB/Picture1.jpg"
import image2 from "../../images/landing page images/second section images/Pepperoni-Pizza 1.png"
import image3 from "../../images/menu images/KEBAB/Picture3.jpg"
import image4 from "../../images/menu images/PIZZA 40cm/Picture3.jpg"
import Item from '../Prodects/Item'
import "slick-carousel/slick/slick.css";
import "./slider.css"
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return (
    <div className="slider-container-main">
      <SliderMain {...settings}>
        <div className="shadow">
        <Item price={"18"} image1={image1} des={"14-20 minutes"}/>
        </div>
        <div className="shadow">
        <Item price={"14"} image1={image2} des={"12-16 minutes"}/>
        </div>
        <div className="shadow">
        <Item price={"22"} image1={image3} des={"16-22 minutes"}/>
        </div>
        <div className="shadow">
        <Item price={"72"} image1={image4} des={"5-12 minutes"} />
        </div>
        <div className="shadow">
        <Item price={"32"} image1={image2} des={"14-20 minutes"}/>
        </div>
        <div className="shadow">
        <Item price={"15"} image1={image1} des={"18-25 minutes"}/>
        </div>
           


        
      </SliderMain>
    </div>
  );
}

export default CenterMode;