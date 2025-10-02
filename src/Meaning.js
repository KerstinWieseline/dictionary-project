import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";



export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}
        <br />
          <Example example={props.meaning.example} />
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    );
}