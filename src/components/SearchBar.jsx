import "../styles/SearchBar.css";
import Results from "./Results";

function SearchBar({ onClick, search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for any word..."
      />
      <img
        onClick={onClick}
        className="icon-search"
        src="../assets/icon-search.svg"
        alt="icon search"
      />
    </div>
  );
}

export default SearchBar;
