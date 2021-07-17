import React from 'react'
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

function LoginPage() {
    const history = useHistory();

    const handleClick = () => {
        console.log('click');
        history.push("/user");
    };

    return (
        <div>
            <Header />
            <h1>Login</h1>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="Password"/>
                </div>
                <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default LoginPage;
