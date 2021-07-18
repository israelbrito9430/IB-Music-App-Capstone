import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

import { useUser } from 'reactfire';

function Header() {
    const user = useUser();

    return (    
        <nav className="header">
            <ul className="header__container">
                <li className="header__container__list">
                    <Link to="/music">IB MUSIC APP</Link>
                </li>
                { user.data && user.data.email ? (
                    <li>
                    <Link to="/user">Profile</Link>
                    </li>
                ) : (                
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </>
                )
                }
            </ul>
        </nav>
    )
}

export default Header
