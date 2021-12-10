import React from "react";
import { Helmet } from "react-helmet";

export default function Meta () {
    return (
        <Helmet>
            
            <title>EinLink</title>
            <meta name="title" content="EinLink" />
            <meta name="description" content="One link, to get you through." />
            
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://einlink.vercel.app/" />
            <meta property="og:title" content="EinLink" />
            <meta property="og:description" content="One link, to get you through." />
            
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://einlink.vercel.app/" />
            <meta property="twitter:title" content="EinLink" />
            <meta property="twitter:description" content="One link, to get you through." />
            {/* <meta property="twitter:image" content={img} /> */}
        </Helmet>
    )
}