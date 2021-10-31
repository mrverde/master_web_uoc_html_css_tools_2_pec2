import React, { useState } from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

import logo from '../../images/logoblue.png'

const NavLinks = props => {
    const { pages, isHeader } = props;

    let location = useLocation();

    const generateNavElements = () => {
        return Object.keys(pages).map((key, idx) => {
            const currentKey = pages[key];

            if (isHeader && currentKey["href"] === "/") {
                return <></>
            }

            return <li key={`nav-${idx}-${key}`} className={currentKey["href"] === location.pathname ? "nav-item active" : "nav-item"} >
                <Link className="nav-link" to={currentKey["href"]}>{currentKey["label"]}</Link>
            </li>

        }
        )
    };

    return <ul className={`nav`}  >
        <img src={logo} width="150" />
        {generateNavElements()}
    </ul >

}

export default NavLinks;