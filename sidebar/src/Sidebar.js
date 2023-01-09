import React from "react";
import { links, social } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  console.log(closeSidebar);

  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 w-full h-full bg-white md:w-1/3 lg:w-1/4`}
    >
      <div className="flex justify-between px-1 py-1 h-20">
        <h1>JScript</h1>
        <button className="text-2xl hover:text-red-500" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="my-10">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li className="mx-4 py-3" key={id}>
              <a className="capitalize flex text-3xl" href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex justify-center text-2xl mt-44 gap-10">
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
