import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../styles/accordian.css';

import '../styles/link.css'
import myimg from '../images/logo.svg'
import { links, name, description, priorityLink, accordianLink, socials } from '../data/einlink'
import { faBandcamp, faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faPinterest, faReddit, faSnapchat, faTelegram, faTiktok, faTumblr, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';

function Links () {

    let desc = ''
    if (description !== "") {
        desc = <h3 className="userDescription">{description}</h3>
    }
    
    let prioLink = ''
    if (priorityLink[0].link !== '' && priorityLink[0].title !== '') {
        prioLink = <div className="pLinkBox">
        {priorityLink.map((link) => (
            <a key={'1'} target="_blank" rel="noreferrer" href={link.link}>
                <div className="pLinkBlock">
                    <h1 className="pLinkTitle">
                        {link.title}
                    </h1>
                    <p className="pLinkDesc">
                        {link.description}
                    </p>
                </div>
            </a>
        ))}
    </div>
    }

    let accordLink = ''
    if (accordianLink[0].title !== '' && accordianLink[0].description !== '' && accordianLink[0].link !== '') {
        accordLink = <Accordion allowZeroExpanded>
        {accordianLink.map((link) => (
            <AccordionItem key={link.title}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {link.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <a href={link.link} target="_blank" rel="noreferrer">
                    {link.description}
                    </a>
                </AccordionItemPanel>
            </AccordionItem>
        ))}
    </Accordion>
    }

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
                {desc}
                {prioLink}
                {accordLink}

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

            
            <p className="embedHeading">
                You can embed anything!
            </p>

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8IzjtXj8ThV?utm_source=generator"
             className="embed"
             width="60%" height="80" 
             frameBorder="0" allowfullscreen="" 
             title="embedded link"
             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

            <p className="linkDisc">
                These colors are for demo purposes and
                will be changed upto your liking upon request.
            </p>

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