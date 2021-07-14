import React from 'react'
import "./WelcomePage.scss";

import registration_background from "../../assets/registration_background.jpeg"
import ListentoMusic from "../../assets/ListentoMusic.jpeg"
import LoginPic from "../../assets/LoginPic.jpg"
import Card from "../../components/Card/Card"


function WelcomePage() {
    return (
        <div className="wpcontainer">
            <h1>IB Music App</h1>
            <div className="wpcontainer__cardlist">
                <Card title="REGISTRATION" img={registration_background} link="/register" />                
                <Card title="LISTEN TO MUSIC" img={ListentoMusic} link="/music" />
                <Card title="LOGIN" img={LoginPic} link="/login" />
            </div>
        </div>
    );
 }
    
export default WelcomePage;
