import { faApple, faGithub, faInstagram, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer () {
    return (
        <div className="footerContainer">
            <p className="madewith">
                Made with <FontAwesomeIcon icon={faHeart} /> and G by <a href="https://github.com/linuxdotexe">linuxdotexe</a>
            </p>
            <div className="footerElements">
                <a href="https://github.com/linuxdotexe"><FontAwesomeIcon className="faicon" icon={faGithub} /></a>
                <a href="https://linkedin.com/in/sainivasmangu"><FontAwesomeIcon className="faicon" icon={faLinkedin} /></a>
                <a href="https://instagram.com/sainivasmangu"><FontAwesomeIcon className="faicon" icon={faInstagram} /></a>
                <a href="https://open.spotify.com/artist/0Gxw6n8Pfk3ZVbgMhvu0zd"><FontAwesomeIcon className="faicon" icon={faSpotify} /></a>
                <a href="https://music.apple.com/in/artist/sai-nivas-mangu/1552891406"><FontAwesomeIcon className="faicon" icon={faApple} /></a>

            </div>
        </div>
    )
}

export default Footer;