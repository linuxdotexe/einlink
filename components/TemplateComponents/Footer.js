import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";

const Footer = ({ footerDesc }) => {
  return (
    <div className="footer">
      <p className="linkDesc">{footerDesc}</p>
      <a href="/">
        <FontAwesomeIcon icon={faLink} className="icon" />
        EinLink
      </a>
    </div>
  );
};

export default Footer;
