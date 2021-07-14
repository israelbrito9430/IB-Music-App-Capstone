import React from 'react'

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/music">IB MUSIC APP</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
