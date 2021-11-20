import React from "react";
import NavLinks from "../NavLinks"
import SocialNetworksLinks from "../SocialNetworksLinks";

import pages from "../../config/pages";
import "./Footer.scss";

const Footer = () => {
    const pagesList = pages;

    const classes = {
        containerClass: "footer-icon-container",
        subcontainerClass: "footer-icon-subcontainer"
    }

    return <footer className="footer">
        <NavLinks pages={pagesList} />
        <SocialNetworksLinks classes={classes} />
    </footer>
}

export default Footer;