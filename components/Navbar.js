import React from "react";

export default function Navbar () {
    return (
        <div className="navbar">
            <div className="container">
                <a href="/">
                    <h2 className="logo">
                    EinLink
                    </h2>
                </a>
                <nav>
                    <ul id="menu" className="elements">
                        <li><a href="#start">Get Started</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}