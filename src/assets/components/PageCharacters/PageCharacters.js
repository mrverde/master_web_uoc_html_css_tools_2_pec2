import React from "react";
import CardCharacter from "../CardCharacter"

import characters from "../../config/characters";

const PageCharacters = () => {
    return <><h1>Actors and Characters</h1>
        {characters.map((char, idx) => (
            <CardCharacter
                key={`${char}-${idx}`}
                img={char.img}
                imgAlt={char.imgAlt}
                characterName={char.characterName}
                actorName={char.actorName}
                chBack={char.chBack} />
        ))}
    </>
}

export default PageCharacters;