import React from 'react'
import "./sliderAng.css"
import imageCard from "../../images/Angebote image/sliderImage.png"
import Slider from "react-slick";
import RigthArrow from "../../images/Angebote image/rightArrow.png"
import leftArrow from "../../images/Angebote image/LeftArrow.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderAng = () => {


    // const settings = {
    //     className: "Slider-center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "0",
    //     slidesToShow: 3,
    //     speed: 500,
    //     slidesToScroll:1,   
    //   };
    const settings = {
        className: "Slider-center",
        dots: true,
        centerMode: true,
        centerPadding: "0",
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1,
        responsive: [
        
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
    <div className={`slider-container`}>
        <Slider {...settings}> 
        <div className="card-ang">
            <div className="image-ang">
                <img src={imageCard} alt="" />
            </div>
            <div className="text-ang">
                <h2 className="Title">
                Family Pizza & Salat angebot
                </h2>
                <p>
                2 Medium Pizza + Potato wedges + Supreme Salad + Pepsi IL
                </p>
                <span>50 CHF</span>
        </div>
        </div>
        <div className="card-ang">
            <div className="image-ang">
                <img src={imageCard} alt="" />
            </div>
            <div className="text-ang">
                <h2 className="Title">
                Family Pizza & Salat angebot
                </h2>
                <p>
                2 Medium Pizza + Potato wedges + Supreme Salad + Pepsi IL
                </p>
                <span>50 CHF</span>
        </div>
        </div>
        <div className="card-ang">
            <div className="image-ang">
                <img src={imageCard} alt="" />
            </div>
            <div className="text-ang">
                <h2 className="Title">
                Family Pizza & Salat angebot
                </h2>
                <p>
                2 Medium Pizza + Potato wedges + Supreme Salad + Pepsi IL
                </p>
                <span>50 CHF</span>
        </div>
        </div>
        
        </Slider>
    </div>
  )
}

export default SliderAng