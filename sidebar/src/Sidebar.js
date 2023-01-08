import React from "react";
import { links, social } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        true ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 w-full h-full bg-white grid grid-rows-1`}
    >
      <div>
        <h1>JScript</h1>
      </div>
      <button onClick={closeSidebar}>
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
