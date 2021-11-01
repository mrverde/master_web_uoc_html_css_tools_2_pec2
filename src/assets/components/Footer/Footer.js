import React from "react";
import NavLinks from "../NavLinks"
import SocialNetworksLinks from "../SocialNetworksLinks";

import pages from "../../config/pages";

const Footer = () => {
    const pagesList = pages;

    return <footer className="footer">
        <hr className="mt-3 mb-3" />
        <NavLinks pages={pagesList} />
        <SocialNetworksLinks />
    </footer>
}

export default Footer;