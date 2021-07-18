import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

import Header from "../../components/Header/Header";

function LoginPage() {
    const history = useHistory();

    const firebase = useFirebaseApp();
    const user = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(user.data && user.data.email) {
            history.push("/user");
        }
    }, []);

    const handleClick = async () => {
        //create new user on firebase auth
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    const handleLogin = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        history.push("/user");
    };

    const handleLogout = async () => {
        await firebase.auth().signOut();
    };

    // console.log('user: ', user);

    return (
        <div>
            <Header />
            <h1>Login</h1>
            { user.data?.email && <button onClick={handleLogout}>Logout</button>}
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;
