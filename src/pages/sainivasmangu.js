import React from "react";

import "../styles/link.css";
import myimg from "../images/userImg.png";

import User from "../../components/TemplateComponents/User";
import PriorityLinks from "../../components/TemplateComponents/PriorityLinks";
import AccordianLinks from "../../components/TemplateComponents/AccordianLinks";
import RegularLinks from "../../components/TemplateComponents/RegularLinks";
import Socials from "../../components/TemplateComponents/Socials";
import Embed from "../../components/TemplateComponents/Embed";
import Footer from "../../components/TemplateComponents/Footer";

import {
  name,
  description,
  priorityLink,
  accordianLink,
  links,
  socials,
  embedHeading,
  embeds,
  footerDesc,
} from "../../src/data/sainivasmangu";

export default function SaiNivasMangu() {
  return (
    <body>
      <User name={name} description={description} myimg={myimg} />
      <PriorityLinks priorityLink={priorityLink} />
      <AccordianLinks link={accordianLink} />
      <RegularLinks links={links} />
      <Socials socials={socials} />
      <Embed embedHeading={embedHeading} embeds={embeds} />
      <Footer footerDesc={footerDesc} />
    </body>
  );
}
