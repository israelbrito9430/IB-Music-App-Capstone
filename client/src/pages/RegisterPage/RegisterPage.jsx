import React from 'react';
import Header from "../../components/Header/Header";
import './RegisterPage.scss';

function registerPage() {

    const handleClick = () => {
        console.log('click');
    };

    return (
        <div>
            <Header />
            <h1>Register now!</h1>
            <div className="register">
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" />
                </div>
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" name="Password"/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword"/>
                </div>
                <button onClick={handleClick}>Register</button>
            </div>
        </div>
    )
}

export default registerPage
