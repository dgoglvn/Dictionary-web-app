import { BiBookOpen, BiMoon } from "react-icons/bi";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <BiBookOpen className="logo" />
      <div className="options">
        <select className="font-select" name="fonts">
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="monospace">Mono</option>
        </select>
        <hr style={{ borderWidth: "1px", color: "#e8e8e8" }} />
        <div className="theme-toggle">
          <div className="switch-outer">
            <span className="switch-inner"></span>
          </div>
          <BiMoon className="moon-icon" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
