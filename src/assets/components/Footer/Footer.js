import React from "react";
import NavLinks from "../NavLinks"
import SocialNetworksLinks from "../SocialNetworksLinks";

import pages from "../../config/pages";
import "./Footer.scss";

const Footer = () => {
    const pagesList = pages;

    return <footer className="footer">
        <NavLinks pages={pagesList} />
        <SocialNetworksLinks classes={{ containerClass: "footer--icon-container" }} />
    </footer>
}

export default Footer;