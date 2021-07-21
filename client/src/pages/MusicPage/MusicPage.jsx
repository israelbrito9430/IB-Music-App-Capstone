import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import MixList from '../../components/MixList/MixList';
import PlayList from '../../components/PlayList/PlayList';
import MixForm from '../../components/MixForm/MixForm';
import Footer from '../../components/Footer/Footer';
import './MusicPage.scss';


import EstaVida from "../../assets/music/Esta-Vida.mp3";
import MichaelJackson from "../../assets/music/MichaelJackson-TheWayYouMakeMeFeel.mp3";
import OyeMiAmor from "../../assets/music/OyeMiAmor.mp3";
import PianoMan from "../../assets/music/PianoMan(Live).mp3";


function MusicPage() {
    return (
        <div className="music-page">
            <Header />
            <h1>LIstening music</h1>
            <div>
                <MixForm title='Camilo - Ropa Cara' img="https://via.placeholder.com/100" />
            </div>
            <div>
                <MixList title="Regueton Mix" image="https://via.placeholder.com/100" song={EstaVida} />
                <MixList title="Pop Mix" image="https://via.placeholder.com/100" song={MichaelJackson} />
                <MixList title="Salsa Mix" image="https://via.placeholder.com/100" song={OyeMiAmor} />
                <MixList title="Vallenato Mix" image="https://via.placeholder.com/100" song={PianoMan} />
                <MixList title="Rock Mix" image="https://via.placeholder.com/100" song={MichaelJackson} />
            </div>
            <div>
                {/* <PlayList /> */}
            </div>
            <Footer />
        </div>
    )
}

export default MusicPage;
