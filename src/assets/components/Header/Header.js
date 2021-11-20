import React from "react";
import NavLinks from "../NavLinks";

import pages from "../../config/pages";
import "./Header.scss"

const Header = () => {
    const pagesList = pages;

    return <header className="header">
        <div>hola</div>
        <NavLinks pages={pagesList} isHeader={true} />
    </header>

}

export default Header;