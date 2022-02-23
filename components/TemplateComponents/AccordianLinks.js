import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../../src/styles/accordian.css";

const AccordianLinks = ({ link }) => {
  let accordLink = "";
  if (
    link[0].title !== "" &&
    link[0].description !== "" &&
    link[0].link !== ""
  ) {
    accordLink = (
      <Accordion allowZeroExpanded>
        {link.map((link) => (
          <AccordionItem key={link.title}>
            <AccordionItemHeading>
              <AccordionItemButton>{link.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.description}
              </a>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  } else {
    accordLink = "";
  }
  return <>{accordLink}</>;
};

export default AccordianLinks;
