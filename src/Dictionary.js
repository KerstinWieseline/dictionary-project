import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";




export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
       
        setResults(response.data);

    }


    function search(event) {
        
        
        
        let apiKey = "0c43aab85t9fo6a6712276a1886b3109";
        let apiUrl =
          `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
          
        
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);

    }

    function load() {
      setLoaded(true);
      search();
    }

    if (loaded) {
      return (
        <div className="Dictionary">
          <section>
            <h1>What are you searching for?</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search for a word..."
                autoFocus={true}
                onChange={handleKeywordChange}
              />
            </form>
            <div className="hint">
              Suggested words: sunset, travel, climbing,...
            </div>
          </section>
          <Results results={results} />
        </div>
      );
    } else {
      load();
      return "Loading";
    }
}