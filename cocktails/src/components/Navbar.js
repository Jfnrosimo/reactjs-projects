import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="px-2 py-1  shadow-lg">
      <div className="flex justify-between items-center py-3 mx-4 lg:justify-around">
        <Link to="/">
          <img className=" w-56" src={logo} alt="cocktail db logo" />
        </Link>
        <ul className="flex lg:text-lg lg:font-semibold">
          <li className="mx-1 lg:mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1 lg:mx-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
