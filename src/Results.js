import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <h2>{results.word}</h2>

        {results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
