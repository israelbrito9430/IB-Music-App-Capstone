import React from 'react';
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {

    return (
      <footer className="footer">
        <div className="footer__section">
          <h3>Contact</h3>
          <a href="mailto:israelbrito9430@gmail.com"><p>Email: israelbrito9430@gmail.com</p></a>
          <a href="tel:9545157083"><p>Call us at 954-515-7083</p></a>
        </div>
        <div className="footer__section">
          <h3>About us</h3>
          <p>We are and application of music, to create popularity in DJ Mix</p>
        </div>
      </footer>
    )
}

export default Footer;


      
