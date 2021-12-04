import React from "react";

function Callout () {
    return (
        <div className="callout">
        <p className="heading">
                Well, what are you waiting for?
            </p>
            <div className="secBtns">
                <div className="forkBtn">
                    <a href="https://github.com/linuxdotexe/einlink_vanilla">
                        Make a fork
                    </a>
                </div>
                <div className="formBtn">
                    <a href="https://forms.google.com">
                        Fill the form
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Callout;