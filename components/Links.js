import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import myimg from '../src/images/icon.png'
import { links, name, description } from '../data'
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'

export default function Links () {
    return (
        <body>
            <img src={myimg} alt="user" className="userImg"/>
            <div className="container">
                <h1 className="userName">{name}</h1>
                <h3 className="userDescription">{description}</h3>
                <div className="linkBox">
                    {links.map((link) => (
                        <a key={'1'} target="_blank" rel="noreferrer" href={link.link}>
                            <div className="linkBlock">
                                <h1 className="linkTitle">
                                    {link.title}
                                </h1>
                                <p className="linkDesc">
                                    {link.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="socials">
                    <a aria-label="social link" href="https://github.com"><FontAwesomeIcon icon={faGithub}/></a>
                    <a aria-label="social link" href="https://instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a aria-label="social link" href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a aria-label="social link" href="https://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
            </div>
            <div className="footer">
                <a href="#">
                    <FontAwesomeIcon icon={faLink} className="icon"/>
                    EinLink
                </a>
            </div>
        </body>
    )
}