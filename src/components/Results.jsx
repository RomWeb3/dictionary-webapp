import "../styles/Results.css";
import { useEffect } from "react";

function Results({ results }) {
  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className="results">
      <div className="result-header">
        <h2 className="word">{results.word}</h2>
        <img
          className="icon-play"
          src="../assets/icon-play.svg"
          alt="icon play"
        />
        <h4 className="phonetic">/ˈkiːbɔːd/</h4>
      </div>
      <div className="result-main">
        <div className="part-of-speech">
          <h3>noun</h3>
          <div className="line"></div>
        </div>
        <div className="definition">
          <h4>Meaning</h4>
          <ul>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
        </div>
        <div className="synonyms">
          <h4>Synonyms</h4>
          <span>electronic keyboard</span>
        </div>
      </div>
      <div className="result-footer">
        <h3>Source</h3>
        <div className="source-link">
          <a href="https://en.wiktionary.org/wiki/keyboard">
            {results.sourceUrls}
          </a>
          <a href="https://en.wiktionary.org/wiki/keyboard">
            <img src="../assets/icon-new-window.svg" alt="new window icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Results;
