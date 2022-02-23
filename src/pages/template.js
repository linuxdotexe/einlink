/* 
? This is your EinLink page template.
? This pulls in all the components and data together.
? Make a copy of this document, change the mentioned things,
? rename the page to what you want your slug to be 
? and your page will be ready!
*/

// * Importing React and all the components
import React from "react";

import User from "../../components/TemplateComponents/User";
import PriorityLinks from "../../components/TemplateComponents/PriorityLinks";
import AccordianLinks from "../../components/TemplateComponents/AccordianLinks";
import RegularLinks from "../../components/TemplateComponents/RegularLinks";
import Socials from "../../components/TemplateComponents/Socials";
import Embed from "../../components/TemplateComponents/Embed";
import Footer from "../../components/TemplateComponents/Footer";

// * Importing data from the file.
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
} from "../../src/data/template"; // ! Change "template" to your data file name.

import myimg from "../../src/images/logo.svg"; // ! Change "logo.svg" to your image name.

export default function Template() {
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
