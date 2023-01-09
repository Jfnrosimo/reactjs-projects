import React from "react";
import { useGlobalContext } from "./context";

//Import UI
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    console.log("hello");
    openSubmenu();
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h1 className="nav-logo">JefScript</h1>
          <button
            className="btn toggle-btn"
            type="button"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
