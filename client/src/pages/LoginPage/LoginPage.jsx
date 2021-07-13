import React from 'react'

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="Password"/>
                </div>
        </div>
    )
}

export default LoginPage
