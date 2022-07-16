import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary({ defaultKeyword }) {
  let [keyword, setKeyword] = useState(defaultKeyword);
  let [results, setResults] = useState(null);
  let [called, setCalled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function call() {
    setCalled(true);
    search();
  }

  if (called) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          ></input>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    call();
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          ></input>
        </form>
      </div>
    );
  }
}
