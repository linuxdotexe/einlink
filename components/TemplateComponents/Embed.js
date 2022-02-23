import React from "react";

const Embed = ({ embedHeading, embeds }) => {
  let embedLink = "";
  if (embeds[0].content !== "") {
    <p>{embedHeading}</p>;
    embedLink = (
      <div>
        {embeds.map((embed) => (
          <>{embed.content}</>
        ))}
      </div>
    );
  } else {
    embedLink = "";
  }
  return <div>{embedLink}</div>;
};
export default Embed;
