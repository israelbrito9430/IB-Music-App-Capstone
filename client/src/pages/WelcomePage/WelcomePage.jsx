import React from 'react'
import WelcomePic from "../../assets/WelcomePic.jpg"
import "./WelcomePage.scss"
import registration_background from "../../assets/registration_background.jpeg"
import ListentoMusic from "../../assets/ListentoMusic.jpeg"
import LoginPic from "../../assets/LoginPic.jpg"
import CardComponent from "../../components/CardWelcomePage/CardComponent"


function WelcomePage() {
    return (
        <div className="wpcontainer">
            <h1>IB Music App</h1>
            <div className="wpcontainer__cardlist">
                <CardComponent title="REGISTRATION" img={registration_background} />                
                <CardComponent title="LISTEN TO MUSIC" img={ListentoMusic} />
                <CardComponent title="LOGIN" img={LoginPic} />
            </div>
        </div>
    );
 }
    
export default WelcomePage;
