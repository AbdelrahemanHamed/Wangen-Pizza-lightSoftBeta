import React from "react";
import "./item.css";
import { useTheme } from "../../context";
import { SUB_CAT} from "../../utils/menuList"
import { useCart } from "../../context/CartCtx";
import toast from "react-hot-toast";
const Item = (props) => {
  const {
    handleAddToCart,
    handleDecrementFromCart,
    handleRemoveFromCart,
    cart,
    totalPrice,
  } = useCart();

  const { darkMode } = useTheme();

  return (
        
    <div className={darkMode ? "contaner-hamed dark-mode" : "contaner-hamed"}>
    <img src={props.image1} style={{ width: "153px" }} alt="" />
    <div>
      <p className="title">{props.name}</p>
      <p className="description">{props.des}</p>
      <p className="price">{props.price} chf</p>
      <i
        className="fa-solid fa-plus plus"
        onClick={() => {
          handleAddToCart(props);
          toast.success("added successfully");}} ></i>
    </div> 
        </div>

  );
};

export default Item;

{/* */}