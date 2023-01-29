import "../styles/SearchBar.css";
import { useState } from "react";
import Results from "./Results";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (search === "" || search === " ") {
      return;
    }
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
    setClicked(true);
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <main>
      <div className="search-bar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
      {clicked && <Results results={results} />}
    </main>
  );
}

export default SearchBar;
