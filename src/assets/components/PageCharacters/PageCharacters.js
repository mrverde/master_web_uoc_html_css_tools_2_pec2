import React from "react";
import CardCharacter from "../CardCharacter"

import char1 from '../../images/01_char.jpeg'
import char2 from '../../images/02_char.jpeg'
import char3 from '../../images/03_char.jpeg'
import char4 from '../../images/04_char.jpeg'
import char5 from '../../images/05_char.jpeg'
import char6 from '../../images/06_char.jpeg'

const characters = [
    {
        img: char1,
        imgAlt: "John Boo photo",
        characterName: "Cheng Ying",
        actorName: "John Boo",
        characterBackground: "Far far away, behind the words mountains, far from the countries Vokalia and Consonantia"
    },
    {
        img: char2,
        imgAlt: "Yu Ming photo",
        characterName: "Zhao Suo / Cheng Po",
        actorName: "Yu Ming",
        characterBackground: "Separated they live in Bookmarksgrove right at the coast of the Semantics"
    },
    {
        img: char3,
        imgAlt: "Zhao Tao photo",
        characterName: "Tu'an Ku",
        actorName: "Zhao Tao",
        characterBackground: "A small river named Duden flows by their place and supplies it"
    },
    {
        img: char4,
        imgAlt: "Jack Chang photo",
        characterName: "Han Jue",
        actorName: "Jack Chang",
        characterBackground: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth"
    },
    {
        img: char5,
        imgAlt: "Zhang Yu photo",
        characterName: "Gongsun Chujiu",
        actorName: "Zhang Yu ",
        characterBackground: "Even the all-powerful Pointing has no control about the blind texts"
    },
    {
        img: char6,
        imgAlt: "Ai Lee photo",
        characterName: "Princess",
        actorName: "Ai Lee",
        characterBackground: "One day however a small line of blind text by the name of Lorem Ipsum"
    },
]


const PageCharacters = props => {
    return <><h1>Actors and Characters</h1>
        {characters.map((char, idx) => (
            <CardCharacter
                key={`${char}-${idx}`}
                img={char.img}
                imgAlt={char.imgAlt}
                characterName={char.characterName}
                actorName={char.actorName}
                characterBackground={char.characterBackground} />
        ))}
    </>
}

export default PageCharacters;