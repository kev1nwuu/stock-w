import React, { useContext, useState } from 'react';
import { ProductContext } from '../compenents/ProductContext';
import { Link } from 'react-router-dom';

import styles from '../pages_css/Shoes_detail.css';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import CustomerReviews from '../compenents/CustomerReviews';
import QA from '../compenents/QA';

const Shoes_detail = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { selectedProductInfo } = useContext(ProductContext);
  


  const sizes = [
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
    '6.5',
    '7',
    '7.5',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '10.5',
    '11',
    '11.5',
    '12',
    '12.5',
    '13',
    '13.5',
    '14',
    '14.5'
  ];
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };


  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };





  if (!selectedProductInfo) {
    return <div>Opps Something went worng back to home!</div>;
  }

  const { name, price, image } = selectedProductInfo;

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };




  return (
    <div className="ShoesDetail">
      <Navbar />
      <div className="productContainer">
        <div className="productImageContainer">
          <img src={image} alt="product-img" className="productImage" />
        </div>
        <div className="productInfoContainer">
          <h2>{name}</h2>

          <div className="productInfo">
            <p>Price: ${price}</p>

            <div className="color-content">
              <div className="color-header">
                <h3>Select Color</h3>
                <div className="questionMark" onClick={togglePopup}>
                  ?
                </div>
              </div>
              <div className="color-groups">
                <div className="color color-black"></div>
                <div className="color color-white"></div>
                <div className="color color-light-gray"></div>
              </div>


              <div className="size-content">
                <h3>Select Size</h3>
                {sizes.map((size, index) => (
                  <>
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      style={{
                        fontWeight: selectedSize === size ? 'bold' : 'normal',
                        width: '40px',

                        backgroundColor: selectedSize === size ? '#333' : '#e0e0e0',
                        color: selectedSize === size ? '#fff' : '#000',
                        cursor: 'pointer'
                      }}
                    >
                      {size}
                    </button>
                    {(index + 1) % 4 === 0 && <br />}
                  </>
                ))}
              </div>


              <div className="quantitySelector">
                <button className="quantityButton" onClick={handleDecrease}>-</button>
                <div className="quantityNumber">{quantity}</div>
                <button className="quantityButton" onClick={handleIncrease}>+</button>
              </div>


              <Link to="/cart">
                <button className="addToCartButton">Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popupContent">
            <h3>Color Explanation</h3>
            <p>This is the explanation for the color selection.</p>
            <button className="closeButton" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="productDetails">
        <div className="productDetailsLeft">
          <h3>Product Details:</h3>
          <ul>
            <li>
              <strong>Style:</strong> Nike Dunk Low White Black
            </li>
            <li>
              <strong>Retail Price:</strong> $100
            </li>
            <li>
              <strong>Release Date:</strong> March 2021
            </li>
          </ul>
        </div>
        <div className="productDetailsRight">
          <h3>Product Description:</h3>
          <p>
            Crafted with precision and attention to detail, {name} feature a durable yet lightweight construction that ensures long-lasting wear. The high-quality materials used in their production guarantee both comfort and durability, allowing you to enjoy them for years to come.
            Invest in the superior quality and timeless design of  {name}. Embrace comfort, style, and versatility with every step you take.
          </p>
        </div>
      </div>


      <CustomerReviews />

      <QA />

      <Footer />
    </div>



  );
};
export default Shoes_detail;
