import React from "react";
import NavLinks from "../NavLinks"

const Header = props => {

    const pages = {
        home: { label: "Home", href: "/" },
        characters: { label: "Actors and characters", href: "/characters" },
        blog: { label: "Blog", href: "/blog" },
        form: { label: "Form", href: "/form" },
    }

    return <div className="header">
        <NavLinks pages={pages} isHeader={true} />
    </div>

}

export default Header;