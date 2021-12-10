import React from "react";
import { socials } from '../../src/data/template'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazonPay, faApplePay, faArtstation, faAtlassian, faAudible, faBandcamp, faBehance, faBitbucket, faBlogger, faCodepen, faDeezer, faDev, faDeviantart, faDiscord, faDribbble, faFacebook, faFlipboard, faGithub, faGooglePay, faGooglePlay, faHackerrank, faInstagram, faItunesNote, faJira, faJsfiddle, faLinkedin, faMailchimp, faMastodon, faMedium, faPatreon, faPaypal, faPinterest, faReddit, faSlack, faSnapchat, faSteam, faStripe, faTelegram, faTiktok, faTumblr, faTwitch, faTwitter, faUnsplash, faWhatsapp, faWikipediaW, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';


function Socials () {
    let applePayLink = ''
    if (socials[0].applePay !== "") {
        applePayLink = <a aria-label="apple pay" href={socials[0].applePay} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faApplePay}/></a>
    }

    let artStationLink = ''
    if (socials[0].artstation !== "") {
        artStationLink = <a aria-label="art station" href={socials[0].artstation} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArtstation}/></a>
    }

    let atlassianLink = ''
    if (socials[0].atlassian !== "") {
        atlassianLink = <a aria-label="atlassian" href={socials[0].atlassian} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAtlassian}/></a>
    }

    let audibleLink = ''
    if (socials[0].audible !== "") {
        audibleLink = <a aria-label="audible" href={socials[0].audible} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAudible}/></a>
    }

    let behanceLink = ''
    if (socials[0].behance !== "") {
        behanceLink = <a aria-label="behance" href={socials[0].behance} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBehance}/></a>
    }

    let bitbucketLink = ''
    if (socials[0].bitbucket !== "") {
        bitbucketLink = <a aria-label="bit bucket" href={socials[0].bitbucket} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBitbucket}/></a>
    }
    
    let bloggerLink = ''
    if (socials[0].blogger !== "") {
        bloggerLink = <a aria-label="blogger" href={socials[0].blogger} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBlogger}/></a>
    }

    let amazonpayLink = ''
    if (socials[0].amazonpay !== "") {
        amazonpayLink = <a aria-label="amazon pay" href={socials[0].amazonpay} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAmazonPay}/></a>
    }

    let stripeLink = ''
    if (socials[0].stripe !== "") {
        stripeLink = <a aria-label="stripe" href={socials[0].strpe} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStripe}/></a>
    }

    let codepenLink = ''
    if (socials[0].codepen !== "") {
        codepenLink = <a aria-label="codepen" href={socials[0].codepen} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodepen}/></a>
    }

    let deezerLink = ''
    if (socials[0].deezer !== "") {
        deezerLink = <a aria-label="deezer" href={socials[0].deezer} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDeezer}/></a>
    }

    let devLink = ''
    if (socials[0].dev !== "") {
        devLink = <a aria-label="dev" href={socials[0].dev} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDev}/></a>
    }

    let deviantartLink = ''
    if (socials[0].deviantart !== "") {
        deviantartLink = <a aria-label="deviant art" href={socials[0].deviantart} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDeviantart}/></a>
    }

    let dribbleLink = ''
    if (socials[0].dribble !== "") {
        dribbleLink = <a aria-label="dribble" href={socials[0].dribble} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDribbble}/></a>
    }

    let flipboardLink = ''
    if (socials[0].flipboard !== "") {
        flipboardLink = <a aria-label="flipboard" href={socials[0].flipboard} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFlipboard}/></a>
    }

    let googlePayLink = ''
    if (socials[0].googlepay !== "") {
        googlePayLink = <a aria-label="google pay" href={socials[0].googlepay} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGooglePay}/></a>
    }

    let hackerrankLink = ''
    if (socials[0].hackerrank !== "") {
        hackerrankLink = <a aria-label="hackerrank" href={socials[0].hackerrank} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHackerrank}/></a>
    }

    let itunesLink = ''
    if (socials[0].itunes !== "") {
        itunesLink = <a aria-label="itunes" href={socials[0].itunes} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faItunesNote}/></a>
    }

    let jiraLink = ''
    if (socials[0].jira !== "") {
        jiraLink = <a aria-label="jira" href={socials[0].jira} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faJira}/></a>
    }

    let jsfiddleLink = ''
    if (socials[0].jsfiddle !== "") {
        jsfiddleLink = <a aria-label="jsfiddle" href={socials[0].jsfiddle} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faJsfiddle}/></a>
    }

    let mailchimpLink = ''
    if (socials[0].mailchimp !== "") {
        mailchimpLink = <a aria-label="mailchimp" href={socials[0].mailchimp} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMailchimp}/></a>
    }

    let mastodonLink = ''
    if (socials[0].mastodon !== "") {
        mastodonLink = <a aria-label="mastodon" href={socials[0].mastodon} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMastodon}/></a>
    }

    let steamLink = ''
    if (socials[0].steam !== "") {
        steamLink = <a aria-label="steam" href={socials[0].steam} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSteam}/></a>
    }

    let wikipideaLink = ''
    if (socials[0].wikipidea !== "") {
        wikipideaLink = <a aria-label="wikipidea" href={socials[0].wikipidea} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWikipediaW}/></a>
    }

    let whatsappLink = ''
    if (socials[0].whatsapp !== "") {
        whatsappLink = <a aria-label="whatsapp" href={socials[0].whatsapp} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>
    }

    let twitchLink = ''
    if (socials[0].twitch !== "") {
        twitchLink = <a aria-label="twitch" href={socials[0].twitch} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitch}/></a>
    }

    let patreonLink = ''
    if (socials[0].patreon !== "") {
        patreonLink = <a aria-label="patreon" href={socials[0].patreon} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPatreon}/></a>
    }

    let googlePlayLink = ''
    if (socials[0].googlePlay !== "") {
        googlePlayLink = <a aria-label="google play" href={socials[0].googlePlay} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGooglePlay}/></a>
    }

    let paypalLink = ''
    if (socials[0].paypal !== "") {
        paypalLink = <a aria-label="paypal" href={socials[0].paypal} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPaypal}/></a>
    }

    let slackLink = ''
    if (socials[0].slack !== "") {
        slackLink = <a aria-label="slack" href={socials[0].slack} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSlack}/></a>
    }

    let unsplashLink = ''
    if (socials[0].unsplash !== "") {
        unsplashLink = <a aria-label="unsplash" href={socials[0].unsplash} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faUnsplash}/></a>
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
        <div className="socials">
                    { amazonpayLink }
                    { applePayLink }
                    { artStationLink }
                    { atlassianLink }
                    { audibleLink }
                    { behanceLink }
                    { bitbucketLink }
                    { bloggerLink }
                    { bandcampLink }
                    { codepenLink }
                    { deezerLink }
                    { devLink }
                    { deviantartLink }
                    { discordLink }
                    { dribbleLink }
                    { facebookLink }
                    { flipboardLink }
                    { githubLink }
                    { googlePayLink }
                    { googlePlayLink }
                    { hackerrankLink }
                    { itunesLink }
                    { instagramLink }
                    { jiraLink }
                    { jsfiddleLink }
                    { linkedinLink }
                    { mailchimpLink }
                    { mailLink }
                    { mastodonLink }
                    { mediumLink }
                    { patreonLink }
                    { paypalLink }
                    { pinterestLink }
                    { redditLink }
                    { slackLink }
                    { snapchatLink }
                    { steamLink }
                    { stripeLink }
                    { telegramLink }
                    { tiktokLink }
                    { tumblrLink }
                    { twitchLink }
                    { twitterLink }
                    { unsplashLink }
                    { whatsappLink }
                    { wikipideaLink }
                    { youtubeLink }
                </div>
    )
}

export default Socials;