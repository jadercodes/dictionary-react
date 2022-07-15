import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition: </strong>
            {definition.definition}
            <br />
            <strong>Example: </strong>
            <em>{definition.example}</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
