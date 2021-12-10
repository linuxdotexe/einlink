import React from 'react';

import { accordianLink } from "../../src/data/template";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../src/styles/accordian.css';

function AccordianLinks () {
    let accordLink = ''
    if (accordianLink[0].title !== '' && accordianLink[0].description !== '' && accordianLink[0].link !== '') {
        accordLink = <Accordion allowZeroExpanded>
        {accordianLink.map((link) => (
            <AccordionItem key={link.title}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {link.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <a href={link.link} target="_blank" rel="noreferrer">
                    {link.description}
                    </a>
                </AccordionItemPanel>
            </AccordionItem>
        ))}
    </Accordion>
    }

    return (
        <>
        {accordLink}
        </>
    )
}

export default AccordianLinks;