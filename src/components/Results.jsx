import "../styles/Results.css";

function Results({ results, onFetch }) {
  const playAudio = (audio) => {
    const audioElement = new Audio(audio);
    audioElement.play();
  };

  return (
    <div className="results">
      {results.slice(0, 1).map((result) => {
        return (
          <div key={Date.now() + result.word} className="result">
            <div className="result-header">
              <h2 className="word">{result.word}</h2>
              {result.phonetics.map((phonetic) => {
                return (
                  <img
                    key={Math.random() * 100 + 200}
                    className="icon-play"
                    src="../assets/icon-play.svg"
                    alt="icon play"
                    onClick={() => playAudio(phonetic.audio)}
                  />
                );
              })}
              <h4 className="phonetic">{result.phonetic}</h4>
            </div>
            <div className="result-main">
              {result.meanings.slice(0, 2).map((meaning) => {
                return (
                  <div key={Date.now() + meaning.partOfSpeech}>
                    <div className="part-of-speech">
                      <h3>{meaning.partOfSpeech}</h3>
                      <div className="line"></div>
                    </div>
                    <div className="definitions">
                      <h4>Meaning</h4>
                    </div>
                    {meaning.definitions.slice(0, 3).map((definition) => {
                      return (
                        <div
                          key={Math.random() * 100 + 1}
                          className="definition"
                        >
                          <ul>
                            <li>{definition.definition}</li>
                          </ul>
                          {definition.example && (
                            <div className="example">
                              <span>"{definition.example}"</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {meaning.synonyms.length !== 0 && (
                      <div className="synonyms">
                        <h4>Synonyms</h4>
                        <span onClick={onFetch}>{meaning.synonyms[0]}</span>
                        <span onClick={onFetch}>{meaning.synonyms[1]}</span>
                        <span onClick={onFetch}>{meaning.synonyms[2]}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="result-footer">
              <h3>Source</h3>
              <div className="source-link">
                <a target="_blank" href={result.sourceUrls[0]}>
                  {result.sourceUrls[0]}
                </a>
                <a target="_blank" href={result.sourceUrls[0]}>
                  <img
                    src="../assets/icon-new-window.svg"
                    alt="new window icon"
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Results;
