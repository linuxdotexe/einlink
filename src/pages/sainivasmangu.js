import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import myimg from '../images/userImg.png'
import { links, name, description, socials } from '../data/sainivasmangu'
import { faBandcamp, faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faPinterest, faReddit, faSnapchat, faTelegram, faTiktok, faTumblr, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';

function Links () {
    
    let githubLink = ''
    if (socials[0].github !== "") {
        githubLink = <a aria-label="github" href={socials[0].github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
    }

    let instagramLink = ''
    if (socials[0].instagram !== "") {
        instagramLink = <a aria-label="instagram" href={socials[0].instagram} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
    }

    let linkedinLink = ''
    if (socials[0].linkedin !== "") {
        linkedinLink = <a aria-label="linkedin" href={socials[0].linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
    }

    let twitterLink = ''
    if (socials[0].twitter !== "") {
        twitterLink = <a aria-label="twitter" href={socials[0].twitter} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
    }

    let facebookLink = ''
    if (socials[0].facebook !== "") {
        facebookLink = <a aria-label="facebook" href={socials[0].facebook} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
    }

    let youtubeLink = ''
    if (socials[0].youtube !== "") {
        youtubeLink = <a aria-label="youtube" href={socials[0].youtube} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a>
    }

    let telegramLink = ''
    if (socials[0].telegram !== "") {
        telegramLink = <a aria-label="telegram" href={socials[0].telegram} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram}/></a>
    }

    let tumblrLink = ''
    if (socials[0].tumblr !== "") {
        tumblrLink = <a aria-label="tumblr" href={socials[0].tumblr} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTumblr}/></a>
    }

    let tiktokLink = ''
    if (socials[0].tiktok !== "") {
        tiktokLink = <a aria-label="tiktok" href={socials[0].tiktok} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTiktok}/></a>
    }

    let redditLink = ''
    if (socials[0].reddit !== "") {
        redditLink = <a aria-label="reddit" href={socials[0].reddit} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faReddit}/></a>
    }

    let snapchatLink = ''
    if (socials[0].snapchat !== "") {
        snapchatLink = <a aria-label="snapchat" href={socials[0].snapchat} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSnapchat}/></a>
    }

    let pinterestLink = ''
    if (socials[0].pinterest !== "") {
        pinterestLink = <a aria-label="pinterest" href={socials[0].pinterest} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPinterest}/></a>
    }
    
    let mediumLink = ''
    if (socials[0].medium !== "") {
        mediumLink = <a aria-label="medium" href={socials[0].medium} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMedium}/></a>
    }

    let discordLink = ''
    if (socials[0].discord !== "") {
        discordLink = <a aria-label="discord" href={socials[0].discord} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}/></a>
    }
    
    let mailLink = ''
    if (socials[0].mail !== "") {
        mailLink = <a aria-label="email" href={socials[0].mail} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
    }

    let bandcampLink = ''
    if (socials[0].bandcamp !== "") {
        bandcampLink = <a aria-label="bandcamp" href={socials[0].bandcamp} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBandcamp}/></a>
    }

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
                    { bandcampLink }
                    { discordLink }
                    { facebookLink }
                    { githubLink }
                    { instagramLink }
                    { linkedinLink }
                    { mailLink }
                    { mediumLink }
                    { pinterestLink }
                    { redditLink }
                    { snapchatLink }
                    { telegramLink }
                    { tiktokLink }
                    { tumblrLink }
                    { twitterLink }
                    { youtubeLink }
                </div>
            </div>
            <div className="footer">
                <a href="/">
                    <FontAwesomeIcon icon={faLink} className="icon"/>
                    EinLink
                </a>
            </div>
        </body>
    )
}

export default Links;