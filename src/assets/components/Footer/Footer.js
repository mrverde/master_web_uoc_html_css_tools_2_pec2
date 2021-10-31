import React from "react";
import NavLinks from "../NavLinks"
import SocialNetworksLinks from "../SocialNetworksLinks";

import pages from "../../config/pages";

const Footer = () => {

    return <div className="footer">
        <hr className="mt-3 mb-3" />
        <NavLinks pages={pages} />
        <SocialNetworksLinks />
    </div>
}

export default Footer;