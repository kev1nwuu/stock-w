import styles from '../pages_css/Home.css';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import Carousel from '../compenents/Carousel';

import Products from '../compenents/products';
import contents1 from '../data/content';
import brand_nav from '../data/brand_nav';

import { Link } from 'react-router-dom';



const Home = () => {



  return (
    <div className="home">

      <Navbar />

      <div className="quick_click_3">
        <div className="container">
          <a href="#" className="navbar-link Sneakersq-link">
            <div className="text-q">Sneakers</div>
          </a>

          <a href="#" className="navbar-link Shoesq-link">
            <div className="text-q">Shoes</div>
          </a>

          <a href="#popular_brands-3" className="navbar-link Popularq-link">
            <div className="text-q">Popular brand</div>
          </a>
        </div>
      </div>



      <Carousel />


      <div className="home-3">
        <div className="vectors-wrapper-3"></div>
        <div className="text-h">Recommended For You (?)</div>
        <div className="recommended-3">
          {contents1.slice(0, 3).map(content => (
            <Products
              key={content.id}
              image={content.image}
              name={content.name}
              price={content.price}
            />
          ))}
        </div>
        <div className="text-h">Trending Sneakers (?)</div>
        <div className="trending_sneakers-3">
          {contents1.slice(3, 6).map(content => (
            <Products
              key={content.id}
              image={content.image}
              name={content.name}
              price={content.price}
            />
          ))}
        </div>
        <div className="text-h">Popular Brands (?)</div>
        <div id="popular_brands-3" className="popular_brands-3">
          {brand_nav.map(product => (
            <Link to={`/shoes_display/${product.id}`} key={product.id}>
              <img src={product.image} alt={product.productType} />
            </Link>
          ))}
        </div>
      </div>




      <Footer />










    </div>
  );
};

export default Home;
