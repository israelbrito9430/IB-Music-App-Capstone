import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

import Header from "../../components/Header/Header";
import './LoginPage.scss';

function LoginPage() {
    const history = useHistory();

    const firebase = useFirebaseApp();
    const user = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if(user.data && user.data.email) {
            history.push("/user");
        }
    }, []);

    const handleLogin = async () => {        
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            setErrorMsg(null);
            history.push("/user");
           })
        .catch(error => {
            setErrorMsg(error.message);
        });
    };

    const handleLogout = async () => {
        await firebase.auth().signOut();
    };

    return (
        <div className="login">
            <Header />
            <h1>Login</h1>
            { user.data?.email && <button onClick={handleLogout}>Logout</button>}
            <div className="login__form">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="button2" onClick={handleLogin}>Login</button>
                {errorMsg && <div className="login__error">{ errorMsg }</div>}
            </div>
        </div>
    )
}

export default LoginPage;
