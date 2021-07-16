import React from 'react';
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {

    return (
      <div className="container">
        <div className="container__section">
          <h3>Contact</h3>
          <a href="mailto:israelbrito9430@gmail.com">Email: israelbrito9430@gmail.com</a>
          <a href="tel:9545157083">Call us at 954-515-7083</a>
        </div>
        <div className="container__section">
          <h3>About us</h3>
          <div>We are and application of music, to create popularity in DJ Mix</div>
        </div>
      </div>
    )
}

export default Footer;


      
