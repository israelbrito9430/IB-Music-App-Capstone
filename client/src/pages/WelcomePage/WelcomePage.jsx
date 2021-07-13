import React from 'react'
import WelcomePic from "../../assets/WelcomePic.jpg"
import "./WelcomePage.scss"
import registration_background from "../../assets/registration_background.jpeg"
import ListentoMusic from "../../assets/ListentoMusic.jpeg"
import Nomusic_Nolife from "../../assets/Nomusic_Nolife.jpeg"


function WelcomePage() {
    return (
        <div className="welcome">
            <div className="welcome__text">
                <h1>Welcome</h1>
            </div>

             <div >
                <img className="welcome__img" src={WelcomePic} alt="Welcome Img" />

                <div>
                    <h1>REGISTRATION</h1>
                    <img src={registration_background} alt="registration" />

                    <h1>LISTEN TO MUSIC</h1>
                    <img src={ListentoMusic} alt="Enter to Web" />

                    <h1>ENTER TO MY DJ PROFILE</h1>
                    <img src={Nomusic_Nolife} alt="ENTER DJ PROFILE" />
                </div>

             </div>
             
        </div>
    )
}

export default WelcomePage
