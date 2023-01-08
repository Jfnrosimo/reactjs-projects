import React from "react";
import { links, social } from "./data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside>
      <div>
        <h1>JScript</h1>
      </div>
      <button>
        <FaTimes />
      </button>

      <ul>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a className="capitalize" href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
