import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FontsModal from "./components/FontsModal";
import useLocalStorage from "use-local-storage";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [modal, setModal] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleClick = () => {
    toggleTheme();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App" data-theme={theme}>
      <Header onClick={handleClick} onModal={toggleModal} theme={theme} />
      <main>
        {modal && <FontsModal />}
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
