import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profle';
import UploadForm from '../../components/UploadForm/UploadForm';
import Header from '../../components/Header/Header';
import './UserPage.scss';

import { useFirebaseApp, useUser } from 'reactfire';

function UserPage() {
    const firebase = useFirebaseApp();
    const user = useUser();
    const history = useHistory();

    const data = {
        firstname: 'Carl',
        lastname: 'Brith',
        email: 'carlsbrith@gmail.com',
        username: 'carl-brith',
    }

    const handleLogout = async () => {
        await firebase.auth().signOut();
        history.push("/");
    };

    return (
        <div className="userPage">
            <Header />
            <h1>User Page</h1>
            { user.data?.email && <button onClick={handleLogout}>Logout</button>}
            <div className="userPage__container">
                <Profile data={data} />
                <UploadForm />
            </div>
            <Footer />
        </div>
    )
}

export default UserPage
