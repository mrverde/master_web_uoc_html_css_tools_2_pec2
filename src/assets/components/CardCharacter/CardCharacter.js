import React from "react";

import "./CardCharacter.scss"

const CardCharacter = props => {
    const { img, imgAlt, characterName, actorName, chBack } = props;

    return <div className="card">
        <div className="card-image-container">
            <img src={img} className="card-img-top" alt={imgAlt} />
        </div>
        <div className="card-body">
            <p className="card-text card-text__character">{characterName}</p>
            <p className="card-text card-text__actor">{actorName}</p>
            <p className="card-text card-text__background">{chBack}</p>
        </div>
    </div>
}

export default CardCharacter;
