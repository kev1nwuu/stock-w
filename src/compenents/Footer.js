import styles from './Footer.css';


const Footer = () => {
    return (


        <div className="footer">
            <div className="columns">
                <div className="column-2">
                    <div className="logo-wrapper">
                        <img src="https://uploads-ssl.webflow.com/647d543cf2fc3d6e5aaef750/6498960b06fcffbd97c10c24_Logo.png" loading="lazy" width="141" height="36" alt="" className="logo-2" />
                    </div>
                </div>
                <div className="small-columns">
                    <div className="column-3">
                        <div className="content">
                            <div className="text-2">COMPANY</div>
                            <div className="footer-links">
                                <div className="link">Location</div>
                                <div className="link">Number of employees</div>
                                <div className="link">Founded</div>
                            </div>
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="content">
                            <div className="text-2">CONTACT</div>
                            <div className="footer-links">
                                <div className="link">Email</div>
                                <div className="link">Address</div>
                                <div className="link">Business hours</div>
                            </div>
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="content">
                            <div className="text-2">ABOUT</div>
                            <div className="footer-links">
                                <div className="link">Terms &amp; Conditions</div>
                                <div className="link">Privacy Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="text-3">Copyright © 2023 StockW </div>
            </div>
        </div>










    );
};

export default Footer;