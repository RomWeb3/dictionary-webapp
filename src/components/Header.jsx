import "../styles/Header.css";
import { useState } from "react";

function Header({ onClick, onModal, theme }) {
  const [rotation, setRotation] = useState(0);
  const isThemeLight = theme === "light" ? 0 : 1;

  const toggleRotation = () => {
    setRotation(rotation === 0 ? 180 : 0);
  };

  return (
    <header>
      <div className="logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <div className="settings">
        <span
          onClick={() => {
            toggleRotation();
            onModal();
          }}
        >
          Sans Serif
        </span>
        <img
          style={{ transform: `rotate(${rotation}deg)` }}
          className="arrow-down"
          src="../assets/icon-arrow-down.svg"
          alt="icon arrow down"
          onClick={() => {
            toggleRotation();
            onModal();
          }}
        />
        <div className="separator"></div>
        <input
          type="range"
          min="0"
          max="1"
          defaultValue={isThemeLight}
          onChange={onClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className="moon-icon"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
