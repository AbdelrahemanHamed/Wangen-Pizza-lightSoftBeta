import React from "react";
import "./section7.css";
import image from "../../images/section7Image.png"
import { useTheme } from '../../context'

const Section7 = () => {
    const { darkMode } = useTheme();
  return (
    <div className={`section7 ${!darkMode?"dark-mode":""}`}>
      <div className="left-side-section7">
        <h1>Gerichte zum Abholen bestellen</h1>
        <p>
          Jetzt bequem Online  abholen oder schnell liefern lassen. Bei uns
          kannst du ganz einfach dein Lieblingsessen bestellen und bequem nach
          Hause liefern lassen!
        </p>
        <button>Zum abholen bestellen</button>
      </div>
      <div className="right-side-section7">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Section7;
