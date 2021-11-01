import React from "react";
import NavLinks from "../NavLinks";

import pages from "../../config/pages";

const Header = () => {
    const pagesList = pages;

    return <header className="header">
        <NavLinks pages={pagesList} isHeader={true} />
    </header>

}

export default Header;