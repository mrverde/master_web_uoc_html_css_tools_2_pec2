import React from "react";
import Router from "../Router"

const Header = props => {

    const pages = {
        home: { label: "Home", href: "/" },
        characters: { label: "Actors and characters", href: "/characters" },
        blog: { label: "Blog", href: "/blog" },
        form: { label: "Form", href: "/form" },
    }

    return <Router pages={pages} />

}

export default Header;