import React from "react";

import User from '../../components/TemplateComponents/User'
import PriorityLinks from '../../components/TemplateComponents/PriorityLinks'
import AccordianLinks from '../../components/TemplateComponents/AccordianLinks'
import RegularLinks from "../../components/TemplateComponents/RegularLinks";
import Socials from "../../components/TemplateComponents/Socials";
import Embed from "../../components/TemplateComponents/Embed";
import Footer from "../../components/TemplateComponents/Footer";

export default function Template () {
    return (
        <body>
            <User />
            <PriorityLinks />
            <AccordianLinks />
            <RegularLinks />
            <Socials />
            <Embed />
            <Footer />
        </body>
    )
}