import React from "react";
import NavLinks from "../NavLinks";

import pages from "../../config/pages";

const Header = () => {

    return <div className="header">
        <NavLinks pages={pages} isHeader={true} />
    </div>

}

export default Header;