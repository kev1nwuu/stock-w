import styles from './Navbar.css';
import logo from '../images/linkedin_banner_image_1.png';
import cart from '../images/icons8-bag-40.png';

const Navbar = () => {





    return (


        <div className="navbar-logo-left w-nav">
            <div className="navbarcontainer w-container">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <img
                            src={logo}
                            loading="lazy"
                            width="178"
                            height="40"
                            alt=""
                            className="logo"
                        />
                    </div>
                    <nav role="navigation" className="navbar-menu w-nav-menu">
                        <a href="/Home" className="navbar-link w-nav-link navs-link">
                            <div className="text">Home</div>
                        </a>
                        <a href="/About" className="navbar-link w-nav-link navs-link">
                            <div className="text">About</div>
                        </a>
                        <a href="/New" className="navbar-link w-nav-link navs-link">
                            <div className="text">News</div>
                        </a>

                        <a href="/LogIn" className="navbar-button w-nav-link">
                            <div className="login">Log in</div>
                        </a>
                        <a href="/signup" className="navbar-button w-nav-link">
                            <div className="login">Register</div>
                        </a>
                        <a href="/cart">
                            <div className="cart-icon">
                                <img src={cart} className="cart-icon-image" />
                            </div>
                        </a>
                    </nav>
                </div>

            </div>
        </div>








    );
};

export default Navbar;