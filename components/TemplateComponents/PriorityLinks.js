import React from "react";

const PriorityLinks = ({ priorityLink }) => {
  let prioLink = "";
  if (priorityLink[0].link !== "" && priorityLink[0].title !== "") {
    prioLink = (
      <div className="pLinkBox">
        {priorityLink.map((link) => (
          <a key={"1"} target="_blank" rel="noreferrer" href={link.link}>
            <div className="pLinkBlock">
              <h1 className="pLinkTitle">{link.title}</h1>
              <p className="pLinkDesc">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    );
  } else {
    prioLink = "";
  }
  return <div>{prioLink}</div>;
};

export default PriorityLinks;
