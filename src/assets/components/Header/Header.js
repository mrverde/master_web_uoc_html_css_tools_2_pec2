import React from "react";
import NavLinks from "../NavLinks";

import pages from "../../config/pages";

const Header = () => {
    const pagesList = pages;

    return <div className="header">
        <NavLinks pages={pagesList} isHeader={true} />
    </div>

}

export default Header;