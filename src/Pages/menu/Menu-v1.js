import React, { useEffect, useState } from "react";
import "./menu-v1.css";
import menuPageBG1 from "../../images/menu images/pexels-vincent-rivaud-2147491-removebg-preview 1.png";
import menuPageBG2 from "../../images/menu images/pexels-pixabay-39069-removebg-preview 2.png";
import menuPageBG3 from "../../images/menu images/Untitled_design__18_-removebg-preview 2.png";
import pizzaImage1 from "../../images/detailed menu page images/margertia-pizza-150x150-removebg-preview 2.png";
import addToCartWhiteIcon from "../../images/detailed menu page images/add-to-cart-white.png";
import light_mode from "../../images/landing page images/navbar images/light.png"
import dark_mode from "../../images/landing page images/navbar images/dark.png"
import black_plus from "../../images/menu images/plus.png"
// import snacksImg from "../../images/menu images/snacks.png";
// import { useTheme } from "../../contexts/ThemeContext";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
// import Header from "../../components/Header";
import { CATEGORIES, SUB_CAT } from "../../utils/menuList";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Menu/Pagination";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartCtx";
import toast from "react-hot-toast";
import { useTheme } from '../../context'
const itemsPerPage = 8;
export default function Menu() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const subCatId = searchParams.get("sub-cat");
  const { pathname } = useLocation();
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNew, setIsNew] = useState(false);
  // console.log(subCategories);
  // console.log(subCategoryList);
  // handle cart
  const {
    handleAddToCart,
    handleDecrementFromCart,
    handleRemoveFromCart,
    cart,
    totalPrice,
  } = useCart();
  console.log(totalPrice);
  console.log(cart);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(subCategoryList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = subCategoryList.slice(startIndex, endIndex);
  // console.log(currentItems);
  useEffect(() => {
    if (id) {
      const category = CATEGORIES.find((el) => el.id === +id);
      setCategory(category);
      setSubCategories((prev) => category.subCat);
      setSubCategoryList(
        (prev) => SUB_CAT.find((el) => el.id === +subCatId).products
      );
      setCurrentPage(1);
      setIsNew(true);
      
    } else {
      navigate("/menu/1?sub-cat=1");
    }
  }, [id, subCatId]);

  const { darkMode ,toggleDarkMode } = useTheme();


  return (
    <div className={`page-container ${!darkMode ?"white-mode":""}`}>
      <Navbar />
     

      <div className={`menu-container`}>
        <div className="categories-container">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className={`category-container ${
                +id === +category.id ? "active" : ""
              }`}
              onClick={() => navigate(`/new/${category.id}?sub-cat=${category.subCat[0].id}`)}
            >
              <h3 className="category-title">{category.name}</h3>
             
              <div className="category-img">
                <img src={category.img} alt={category.name} />
              </div>
            </div>
          ))}
        </div>
        {/* sub category  */}
        <div className="subcategory-container">
          <h3 className="title">{category.name}</h3>
          <div className="boxes-container">
            {subCategories.map((subCat) => (
              <div
                key={subCat.id}
                className={`box-container ${
                  +subCat.id === +subCatId && " active"
                }`}
                onClick={() =>
                  navigate(`/new/${subCat.catId}?sub-cat=${subCat.id}`)
                }
              >
                <p>{subCat.name}</p>
              </div>
            ))}
           
          </div>
        </div>
        {/* list  */}
       
        <div className="menu-list">
     
          {currentItems.map((product) => (
            <div key={product.id} className="menu-list__item">
              <img src={product.img} alt="pizza " />
              <div className="info">
                <h5 className="title">{product.title}</h5>
                <p>{product.desc}</p>
              </div>
              <span className="price">CHF {product.price}</span>
              <i className="add-to-cart">
                <img
                  onClick={() => {
                    handleAddToCart(product);
                    toast.success("added successfully");
                  }}
                  src={darkMode?addToCartWhiteIcon:black_plus}
                  alt="add to cart icon"
                />
              </i>
            
              <div className="separator"></div>
            </div>
          ))}
          <div className="toggle-btn">
    <img src={darkMode?light_mode:dark_mode} alt="" className="dark-image-mode" onClick={()=>{toggleDarkMode()}} />
  </div>
        </div>
        {/* pagination  */}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            isNew={isNew}
            setIsNew={setIsNew}
            onPageChange={handlePageChange}
          />
        )}

        {/* images  */}
        {/* <img className="bg1" src={menuPageBG1} alt="pizza" />
        <img className="bg2" src={menuPageBG2} alt="background img2" /> */}
        {/* <img className="bg3" src={menuPageBG3} alt="pepper" /> */}
      </div>
      <div className="toggle-btn">
    <img src={darkMode?light_mode:dark_mode } alt="" className="dark-image-mode" onClick={()=>{toggleDarkMode()}} />
  </div>
      <Footer />
    </div>
  );
}
