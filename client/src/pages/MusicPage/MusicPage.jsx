import React from 'react';
import Header from "../../components/Header/Header";
import MixList from '../../components/MixList/MixList';
import PlayList from '../../components/PlayList/PlayList';
import MixForm from '../../components/MixForm/MixForm';
import Footer from '../../components/Footer/Footer';
import './MusicPage.scss';

function MusicPage() {
    return (
        <div className="music-page">
            <Header />
            <h1>LIstening music</h1>

            <div>
                <MixForm title="Camilo - Ropa Cara" img="https://via.placeholder.com/100" />
            </div>

            <div>
                <MixList title="Regueton Mix" img="https://via.placeholder.com/100" />
                <MixList title="Pop Mix" img="https://via.placeholder.com/100" />
                <MixList title="Salsa Mix" img="https://via.placeholder.com/100" />
                <MixList title="Vallenato Mix" img="https://via.placeholder.com/100" />
                <MixList title="Rock Mix" img="https://via.placeholder.com/100" />
            </div>
            <div>
                {/* <PlayList /> */}
            </div>
            <Footer />
        </div>
    )
}

export default MusicPage;
