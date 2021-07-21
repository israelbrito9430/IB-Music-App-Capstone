import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Header.scss';

import { useUser } from 'reactfire';
import logo from '../../assets/logo/logo-ib-app.png';

function Header() {
    const user = useUser();
    const history = useHistory();
    const isPathLogin = history.location.pathname === '/login';
    const isPathRegister = history.location.pathname === '/register';

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
                        <Link 
                            className={isPathLogin ? 'header__container__item--active' : 'header__container__item'}
                            to="/login">Login</Link>
                    </li>
                    <li>
                        <Link 
                            className={isPathRegister ? 'header__container__item--active' : 'header__container__item'}
                            to="/register" >Register</Link>
                    </li>
                </>
                )
                }
            </ul>
        </nav>
    )
}

export default Header
