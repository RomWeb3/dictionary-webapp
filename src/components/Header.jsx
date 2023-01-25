import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <div className="settings">
        <span>Sans Serif</span>
        <img src="../assets/icon-arrow-down.svg" alt="icon arrow down" />
        <div className="separator"></div>
        <input type="range" min="0" max="1" />
        <img
          className="moon-icon"
          src="../assets/icon-moon.svg"
          alt="icon moon"
        />
      </div>
    </header>
  );
}

export default Header;
