import React from "react";
import { footerDesc } from "../../src/data/template";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';

function Footer () {
    return (
        <div className="footer">
            <p className="linkDesc">
                {footerDesc}
            </p>
            <a href="/">
                <FontAwesomeIcon icon={faLink} className="icon"/>
                EinLink
            </a>
        </div>
    )
}

export default Footer;