import React from "react";
import heroImg from '../src/images/undraw_share_link_qtxe.svg'

function Hero () {
    return (
        <div className="heroMain">
        <div className="hero">
            <div className="heroContainer">
                <p className="heroHeading">
                    One link, <br/> to get you through.
                </p>
                <img
                src={heroImg}
                className="heroImg"
                alt="social sharing"
                title="undraw.co"
                />
            </div>
            <p className="heroSub">
                Stay in touch with your audience with just one link.
                That's all you're ever gonna need.
                <br />
                With EinLink, the process is simplified and transparent.
            </p>
        </div>
        </div>
    )
}

export default Hero;