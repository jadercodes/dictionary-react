import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary({ defaultKeyword }) {
  let [keyword, setKeyword] = useState(defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [called, setCalled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001bcd6362ab0d94b97bea567f2db2cb45a";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={defaultKeyword}
              autoFocus={true}
              onChange={handleKeywordChange}
            ></input>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    call();
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            ></input>
          </form>
        </section>
      </div>
    );
  }
}
