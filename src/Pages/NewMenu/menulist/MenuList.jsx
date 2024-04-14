import React from 'react'
import { CATEGORIES, SUB_CAT } from "../../../utils/menuList";
import "./menuList.css"
import logo from "../../../images/New-menu/wangen (1) 4.png"
import SearchIcon from "../../../images/New-menu/search-svgrepo-com 1.png"
import addToCartWhiteIcon from "../../../images/detailed menu page images/add-to-cart-white.png";
import {useCart} from "../../../context/CartCtx"
import { useEffect,useState } from 'react';
import toast from "react-hot-toast";
// import Pagination from "../../../../components/Menu/Pagination"

import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const MenuList = () => {
  const {
    handleAddToCart,
    handleDecrementFromCart,
    handleRemoveFromCart,
    cart,
    totalPrice,
  } = useCart();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const subCatId = searchParams.get("sub-cat");
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [isNew, setIsNew] = useState(false);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
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
      navigate("/new/1?sub-cat=1");
    }
  }, [id, subCatId]);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  
  const totalPages = Math.ceil(subCategoryList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = subCategoryList.slice(startIndex, endIndex);
  return (
    <div className='main-menu-section'>
          <div className="left-side-items">
            <img src={logo} alt="" />
            <ul className="items-list">
          {CATEGORIES.map((category) => (
            <li
              key={category.id}
              className={`${
                +id === +category.id ?"active" : ""
              }`}
              onClick={() =>
                navigate(
                  `/new/${category.id}?sub-cat=${category.subCat[0].id}`)
              }
             > {category.name}

             </li>
          ))}
        </ul>
          </div>

           <div className="right-side-list">
            <div className="search">
              <img src={SearchIcon} alt="" className='SearchIcon' />
              <input type="search"  placeholder='Suche nach einem Gericht'/>
            </div>
            <h3 className="title">{category.name}</h3>
            <div className="boxes-container">
            {subCategories.map((subCat) => (
              <div
                key={subCat.id}
                className={`box-container ${
                  +subCat.id === +subCatId && "active"
                }`}
                onClick={() =>
                  navigate(`/new/${subCat.catId}?sub-cat=${subCat.id}`)
                }
              >
                <p>{subCat.name}</p>
              </div>
            ))}
           
          </div>
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
             src={addToCartWhiteIcon}
             alt="add to cart icon"
           />
         </i>
         <div className="separator"></div>
       </div>
     ))}
    
   </div>
           </div>
           {/* {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            isNew={isNew}
            setIsNew={setIsNew}
            onPageChange={handlePageChange}
          />
        )} */}


    </div>
  )
}

export default MenuList