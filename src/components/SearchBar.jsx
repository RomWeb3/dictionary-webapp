import "../styles/SearchBar.css";
import { useState } from "react";
import Results from "./Results";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [searchBarClass, setSearchBarClass] = useState("search-bar");

  // const emptySearch = () => {
  //   setSearchBarClass("search-bar empty");
  // };

  const handleClick = async () => {
    if (search === "" || search === " ") {
      setSearchBarClass("search-bar empty");
      return;
    }
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setResults(data);
      setClicked(true);
    } catch (error) {
      console.error(error);
      setResults({
        emoji: "😕",
        title: "No Definitions Found",
        message:
          "Sorry pal, we couldn't find definitions for the word you were looking for.",
        resolution:
          "You can try the search again at later time or head to the web instead.",
      });
      setClicked(true);
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleFetch = (e) => {
    fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.innerText}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
  };

  return (
    <main>
      <div className={searchBarClass}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchBarClass("search-bar");
          }}
          onKeyDown={handleKeypress}
          type="text"
          placeholder="Search for any word..."
        />
        <img
          onClick={handleClick}
          className="icon-search"
          src="../assets/icon-search.svg"
          alt="icon search"
        />
      </div>
      {searchBarClass === "search-bar empty" && (
        <p className="error">Whoops, can’t be empty…</p>
      )}
      {results.length > 0 ? (
        clicked && <Results results={results} onFetch={handleFetch} />
      ) : (
        <div className="no-results">
          <span role="img" className="emoji" aria-label="emoji">
            {results.emoji}
          </span>
          <h2>{results.title}</h2>
          <p>{results.message}</p>
          <p>{results.resolution}</p>
        </div>
      )}
    </main>
  );
}

export default SearchBar;
