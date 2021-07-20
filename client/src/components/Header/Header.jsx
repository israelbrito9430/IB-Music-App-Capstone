import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

import { useUser } from 'reactfire';
import logo from '../../assets/logo/logo-ib-app.png';

function Header() {
    const user = useUser();

    return (    
        <nav className="header">
            <ul className="header__container">
                <li className="header__container__list">
                    <Link to="/music"><img src={logo} alt="Logo icon" /></Link>
                </li>
                { user.data && user.data.email ? (
                    <li>
                    <Link to="/user">Profile</Link>
                    </li>
                ) : (                
                <>
                    <li>
                        <Link className="header__container__item" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="header__container__item--active" to="/register">Register</Link>
                    </li>
                </>
                )
                }
            </ul>
        </nav>
    )
}

export default Header
