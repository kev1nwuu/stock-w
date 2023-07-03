import nikeImage1 from "../images/shoes_home/1.avif";
import nikeImage2 from "../images/shoes_home/2.avif";
import JordanImage from "../images/shoes_home/3.avif";
import JordanImage1 from "../images/shoes_home/4.avif";
import JordanImage2 from "../images/shoes_home/5.avif";
import converseImage from "../images/shoes_home/6.avif";
import brand1 from "../images/shoes_home/nikemay.webp";
import brand2 from "../images/shoes_home/jordanmay2.webp";
import brand3 from "../images/shoes_home/adidasmay.webp";

const productData = [
    {
      id: 1,
      name: "Nike Dunk Low Retro White Black",
      image:
      nikeImage1,
      productType: "Nike-Dunk",
      price: 220,

    },
    {
      id: 2,
      name: "Nike Air Force 1 Low '07",
      image:
      nikeImage2,
      productType: "Nike-AirForcer",
      price: 169,
    },
    {
      id: 3,
      name: "Jordan 1 Chicago Lost and Found",
      image:
      JordanImage,
      productType: "sneaker3",
      price: 170,

    }, 

    {
      id: 4,
      name: "Jordan 1 Travis Scott Reverse Mocha",
      image:
      JordanImage1,
      productType: "Jordan 1",
      price: 1139,

    },
    {
      id: 5,
      name: "Jordan 1 Fragment x Travis Scott",
      image:
      JordanImage2,
      productType: "Jordan 1",
      price: 1419,
    },
    {
      id: 6,
      name: "Converse Chuck Taylor All-Star 70",
      image:
      converseImage,
      productType: "converse",
      price: 170,
    }

    
  ];
  export default productData;