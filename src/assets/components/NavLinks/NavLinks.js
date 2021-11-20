import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

import "./NavLinks.scss"

const NavLinks = props => {
    const { pages, isHeader } = props;

    const classGen = isHeader ? "header" : "footer";

    let location = useLocation();

    const generateNavElements = () => {
        return Object.keys(pages).map((key, idx) => {
            const currentKey = pages[key];

            if (isHeader && currentKey["href"] === "/") {
                return <div key="nav-home"></div>
            }

            return <li key={`nav-${idx}-${key}`}
                className={currentKey["href"] === location.pathname ?
                    `nav-item nav-item__${classGen} active active__${classGen}` :
                    `nav-item nav-item__${classGen}`}>
                <Link className={`nav-link nav-link__${classGen}`}
                    to={currentKey["href"]}>
                    {currentKey["label"]}
                </Link>
            </li >

        }
        )
    };

    return <div className={`nav-container nav-container__${classGen}`}>
        <ul className={`nav nav__${classGen}`}  >
            {generateNavElements()}
        </ul >
    </div>

}

export default NavLinks;