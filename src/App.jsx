import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FontsModal from "./components/FontsModal";
import useLocalStorage from "use-local-storage";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [modal, setModal] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedFont, setSelectedFont] = useState("inter");

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

  const toggleRotation = () => {
    setRotation(rotation === 0 ? 180 : 0);
  };

  return (
    <div
      className="App"
      data-theme={theme}
      style={{ fontFamily: selectedFont }}
    >
      <Header
        onClick={handleClick}
        onModal={toggleModal}
        theme={theme}
        selectedFont={selectedFont}
        rotation={rotation}
        toggleRotation={toggleRotation}
      />
      <main>
        {modal && (
          <FontsModal
            setSelectedFont={setSelectedFont}
            toggleRotation={toggleRotation}
            onClose={() => setModal(false)}
          />
        )}
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
