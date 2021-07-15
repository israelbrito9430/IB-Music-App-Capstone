import React from 'react';
import { Link } from "react-router-dom";

import "./Card.scss";

function CardComponent(props) {

    return (
        <Link to={props.link} className="card">
            <div>{props.title}</div>
            <img className="card__img" src={props.img} alt="registration_background"/>
        </Link>
    )
}

export default CardComponent;


      
