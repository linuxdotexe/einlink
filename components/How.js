import React from "react";

import socialshare from '../src/images/undraw_social_share_re_qb4v.svg'

function How () {
    return (
        <div className="how">
            <p className="heading">
                How to use EinLink
            </p>

            <p className="howDescription">
                <a href="https://github.com/linuxdotexe/einlink_vanilla/wiki">Here</a> is a comprehensive guide on how you can use EinLink.
                Follow this and you will have your very own EinLink up and running in a matter of
                minutes.
                <br />
                <br />
                The zist of it is that if you have a GitHub account,
                you can fork the repo and add your links in a JS file.
                If you don't have a GitHub account or don't want to deal with
                the code, you can fill a form and I or a contributor will do it for you.
            </p>
            <img
            className="socialShareImg"
            src={socialshare}
            alt="social share"
            title="undraw.co"
            />
        </div>
    )
}

export default How;