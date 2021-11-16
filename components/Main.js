import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import myimg from '../src/images/icon.png'
import { links, name, description } from '../data'
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


export default function Main () {
    return (
        <body>
            <img src={myimg} alt="user" class="userImg"/>
            <div class="container">
                <h1 class="userName">{name}</h1>
                <h3 class="userDescription">{description}</h3>
                <div class="linkBox">
                    {links.map((link) => (
                        <a key={'1'} target="_blank" rel="noreferrer" href={link.link}>
                            <div class="linkBlock">
                                <h1 class="linkTitle">
                                    {link.title}
                                </h1>
                                <p class="linkDesc">
                                    {link.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
                <div class="socials">
                    <a aria-label="social link" href="https://github.com"><FontAwesomeIcon icon={faGithub}/></a>
                    <a aria-label="social link" href="https://instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a aria-label="social link" href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a aria-label="social link" href="https://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
            </div>
            <div class="footer">
                <a href="#">
                    <FontAwesomeIcon icon={faLink} className="icon"/>
                    EinLink
                </a>
            </div>
        </body>
    )
}