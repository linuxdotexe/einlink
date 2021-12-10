import React from "react";
import { embedHeading } from "../../src/data/template";

export default function Embed () {
    return (
        <div>
            
            <p className="embedHeading">
                {embedHeading}
            </p>

            <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8IzjtXj8ThV"
            width="100%"
            height="80" 
            frameBorder="0" allowfullscreen="" 
            title="embedded link"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            >
            </iframe>
            <iframe 
            width="100%"
            height="315" 
            src="https://www.youtube-nocookie.com/embed/GVTRJa4B4fY" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
    )
}