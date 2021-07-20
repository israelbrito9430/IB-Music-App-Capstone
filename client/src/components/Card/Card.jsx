import React from 'react';
import { Link } from "react-router-dom";

import "./Card.scss";

function CardComponent(props) {

    return (
        <Link to={props.link} className="card">
            <h2>{props.title}</h2>
            <img className="card__img" src={props.img} alt="registration_background"/>
        </Link>
    )
}

export default CardComponent;


      
