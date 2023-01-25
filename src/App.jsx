import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleClick = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar
          onClick={handleClick}
          search={search}
          setSearch={setSearch}
        />
        <Results results={results} />
      </main>
    </div>
  );
}

export default App;
