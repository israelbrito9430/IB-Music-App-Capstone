import React from 'react'
import "./WelcomePage.scss";

import registration_background from "../../assets/registration_background.jpeg"
import Nomusic_Nolife from "../../assets/Nomusic_Nolife.jpeg"
import LoginPic from "../../assets/LoginPic.jpg"
import Card from "../../components/Card/Card"


function WelcomePage() {
    return (
        <div className="wpcontainer">
            <h1 className="wpcontainer__title"> IB Music App</h1>
            <div className="wpcontainer__cardlist">
                <Card title="REGISTRATION" img={registration_background} link="/register" />                
                <Card title="LISTEN TO MUSIC" img={Nomusic_Nolife} link="/music" />
                <Card title="LOGIN" img={LoginPic} link="/login" />
            </div>
        </div>
    );
 }
    
export default WelcomePage;
