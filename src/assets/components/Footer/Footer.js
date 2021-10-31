import React from "react";
import NavLinks from "../NavLinks"
import SocialNetworksLinks from "../SocialNetworksLinks";


const Footer = props => {
    const pages = {
        home: { label: "Home", href: "/" },
        characters: { label: "Actors and characters", href: "/characters" },
        blog: { label: "Blog", href: "/blog" },
        form: { label: "Form", href: "/form" },
    }

    return <div className="footer">
        <NavLinks pages={pages} />
        <SocialNetworksLinks />
    </div>
}

export default Footer;