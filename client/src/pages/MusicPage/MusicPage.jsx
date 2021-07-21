import React, { useState } from 'react';

import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/storage';

import Header from "../../components/Header/Header";
import MixList from '../../components/MixList/MixList';
import PlayList from '../../components/PlayList/PlayList';
import MixForm from '../../components/MixForm/MixForm';
import CommentForm from '../../components/CommentForm/CommentForm';
import Footer from '../../components/Footer/Footer';
import './MusicPage.scss';


import EstaVida from "../../assets/music/Esta-Vida.mp3";
import MichaelJackson from "../../assets/music/MichaelJackson-TheWayYouMakeMeFeel.mp3";
import OyeMiAmor from "../../assets/music/OyeMiAmor.mp3";
import PianoMan from "../../assets/music/PianoMan(Live).mp3";
import LaRebelion from "../../assets/music/Joe Arroyo - La Rebelion.mp3"


function MusicPage() {
    const [audioPath,setAudioPath]=useState(null)
    const firebase = useFirebaseApp();
    const storage = firebase.storage();
    const songRef = storage.ref('audios/audio_Michael Jackson - The Way You Make Me Feel.mp3')
    songRef.getDownloadURL().then(url=>{
        setAudioPath(url)
    })
    return (
        <div className="music-page">
            <Header />
            <h1>Listening Music</h1>
            <div>{ audioPath &&
                <audio src={audioPath} controls>
                     <MixForm  />
                </audio>}
                <CommentForm />
            </div>
            <div>
                <h1>PLAYLIST</h1>
            </div>
            
            <div>
           
                <MixList title="Vallenato Mix" image="https://via.placeholder.com/100" song={EstaVida} />
                <MixList title="Pop Mix" image="https://via.placeholder.com/100" song={MichaelJackson} />
                <MixList title="Rock Mix" image="https://via.placeholder.com/100" song={OyeMiAmor} />
                <MixList title="Top Classic Mix" image="https://via.placeholder.com/100" song={PianoMan} />
                <MixList title="Salsa Mix" image="https://via.placeholder.com/100" song={LaRebelion} />
            </div>
            <div>
                
                {/* <PlayList /> */}
            </div>
            <Footer />
        </div>
    )
}

export default MusicPage;
