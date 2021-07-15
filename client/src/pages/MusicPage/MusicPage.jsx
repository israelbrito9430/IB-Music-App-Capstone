import React from 'react';
import Header from "../../components/Header/Header";
import MixList from '../../components/MixList/MixList';
import PlayList from '../../components/PlayList/PlayList';
import MixForm from '../../components/MixForm/MixForm';

function MusicPage() {
    return (
        <div>
            <Header />
            <h1>LIstening music</h1>

            <div>
                <MixForm />
            </div>

            <div>
                <MixList />
                <MixList />
                <MixList />
                <MixList />
                <MixList />
            </div>
            <div>
                <PlayList />
            </div>
        </div>
    )
}

export default MusicPage;
