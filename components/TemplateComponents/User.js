import React from "react";
import { name, description } from '../../src/data/template'

import myimg from '../../src/images/logo.svg'

function User () {
    let desc = ''
    if (description !== "") {
        desc = <h3 className="userDescription">{description}</h3>
    }

    return (
        <div>
            <img src={myimg} alt="user" className="userImg"/>
            <h1 className="userName">{name}</h1>
            { desc }
        </div>
    )
}

export default User;