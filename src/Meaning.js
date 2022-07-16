import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <section>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </section>
          </div>
        );
      })}
    </div>
  );
}
