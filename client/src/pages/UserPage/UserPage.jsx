import React from 'react';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profle';
import UploadForm from '../../components/UploadForm/UploadForm';

function UserPage() {

    const data = {
        firstname: 'Carl',
        lastname: 'Brith',
        email: 'carlsbrith@gmail.com',
        username: 'carl-brith',
    }

    return (
        <div>
            <h2>User Page</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Profile data={data} />
                <UploadForm />
            </div>
            <Footer />
        </div>
    )
}

export default UserPage
