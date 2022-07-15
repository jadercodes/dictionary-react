import React from "react";

export default function Phonetic({ phonetic }) {
  if (phonetic.audio && phonetic.text) {
    return (
      <div className="Phonetic">
        <a href={phonetic.audio} target="_blank" rel="noreferrer noopener">
          Listen
        </a>{" "}
        {phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
