import React from 'react';
import "./CardComponent.scss"

function CardComponent(props) {
    return (
        <div className="card">
            <div>{props.title}</div>
            <img className="card__img" src={props.img} alt="registration_background"/>
        </div>
    )
}

export default CardComponent;


      
