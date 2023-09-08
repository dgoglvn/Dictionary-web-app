import { useContext, useEffect } from "react";
import { BiBookOpen, BiMoon } from "react-icons/bi";
import "./TopNav.css";
import ThemeContext from "../../context/ThemeContext";
import FontContext from "../../context/FontContext";

const TopNav = () => {
  const { theme, themeToggle } = useContext(ThemeContext);
  const { fontChange } = useContext(FontContext);

  return (
    <nav className="top-nav">
      <BiBookOpen className="logo" />
      <div className="options">
        <select
          className="font-select"
          name="fonts"
          value={localStorage.font}
          onChange={fontChange}
        >
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="monospace">Mono</option>
        </select>
        <hr style={{ borderWidth: "1px", color: "#e8e8e8" }} />
        <div className="theme-toggle">
          <div
            className={`switch-outer ${theme === "dark" ? "dark" : ""}`}
            onClick={themeToggle}
          >
            <span
              className={`switch-inner ${theme === "dark" ? "dark" : ""}`}
            ></span>
          </div>
          <BiMoon className={`moon-icon ${theme === "dark" ? "active" : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
