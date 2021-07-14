import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

function Header() {
    return (    
        <nav className="header">
            <ul className="header__container">
                <li className="header__container__list">
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
    )
}

export default Header
