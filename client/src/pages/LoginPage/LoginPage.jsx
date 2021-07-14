import React from 'react'
import Header from "../../components/Header/Header";

function LoginPage() {
    const handleClick = () => {
        console.log('click');
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

export default LoginPage
