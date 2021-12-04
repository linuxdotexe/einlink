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
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIZ-F3DxHmjM9TUwdm9UEXjQb6kp8LMVzn6fp3tUUOsVZPbw/viewform?usp=sf_link">
                        Fill the form
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Callout;