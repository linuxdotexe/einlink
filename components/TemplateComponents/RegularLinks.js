import React from "react";

const RegularLinks = ({ links }) => {
  return (
    <div className="linkBox">
      {links.map((link) => (
        <a key={"1"} target="_blank" rel="noreferrer" href={link.link}>
          <div className="linkBlock">
            <h1 className="linkTitle">{link.title}</h1>
            <p className="linkDesc">{link.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RegularLinks;
