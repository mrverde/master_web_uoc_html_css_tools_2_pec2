import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

import "./SocialNetworksLinks.scss"

const SocialNetworksLinks = (props) => {
    const { classes } = props;

    return <div className={classes.containerClass}>
        <a className="link" href="http://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="icon--link" />
        </a>
        <a className="link" href="http://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="icon--link" />
        </a>
        <a className="link" href="http://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="icon--link" />
        </a>
        <a className="link" href="http://tiktok.com" target="_blank">
            <FontAwesomeIcon icon={faTiktok} className="icon--link" />
        </a>
    </div>
}

export default SocialNetworksLinks;

