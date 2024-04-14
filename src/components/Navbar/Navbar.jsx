import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../images/footer/logo.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import { useCart } from "../../context/CartCtx";

const Navbar = () => {
  const [Menu, setMenu] = useState("home");

  const [isActive, setIsActive] = useState(false);
  const [isChange, setIsChange] = useState(true);
  const [showCart, setShowCart] = useState(false);

  // const [scrollTo, setScrollTo] = useState()

  if (Menu === "Reservation") {
    window.scrollTo(0, 3650);
    console.log(Menu);
  }

  // if(Menu==="home"){
  //   window.scrollTo(0,0)
  //    console.log(Menu)
  //  }

  const { cart } = useCart();

  const handleShowCart = () => {
    setShowCart(true);
    // document.body.style.overflow = "hidden"; // Disable page scroll
  };
  const handleCloseCart = () => {
    setShowCart(false);
    // document.body.style.overflow = ""; // Enable page scroll
  };
  const handleClick = () => {
    setIsActive(!isActive); // Toggle the isActive state
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY < 700) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  });

  return (
    <>
      <div className={isChange ? "navbar" : "navbar navbar-change"}>
        <img className="logo" src={Logo} alt="logo" />
        <nav>
          <ul className={isActive ? "active" : ""}>
            <li>
              <NavLink
                to="/"
                // onClick={() => setMenu("home")}
                // className={Menu == "home" ? "activeLink" : " "}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new"
                // onClick={() => setMenu("Menü")}
                // className={Menu === "Menü" ? "activeLink" : " "}
              >
                Menü{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                // onClick={() => setMenu("Reservation")}
                // className={Menu == "Reservation" ? "activeLink" : ""}
                to="/reservation"
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/angebote"
                // onClick={() => setMenu("Angebote")}
                // className={Menu == "Angebote" ? "activeLink" : ""}
              >
                Angebote & Gustscheine{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="btn">
                Kontakt
              </NavLink>
            </li>

            <li>
              <i
                onClick={handleShowCart}
                className="fa-solid fa-cart-shopping car"
              >
                <span className="length">
                  {cart.length > 0 ? cart.length : "0"}
                </span>
              </i>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => {
            handleClick();
          }}
          className="fas fa-bars"
          id="bars"
        ></div>
      </div>

      {showCart && (
        <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
      )}
    </>
  );
};

export default Navbar;
