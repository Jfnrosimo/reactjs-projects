import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  console.log(openSidebar);

  return (
    <main className=" min-h-screen flex justify-center items-center">
      <button
        className="mt-5 ml-5 text-2xl text-blue-400 fixed left-0 top-0"
        type="button"
        onClick={openSidebar}
      >
        <FaBars />
      </button>
      <button
        className="bg-zinc-700 text-gray-200 px-2 py-1 rounded"
        type="button"
        onClick={openModal}
      >
        Show Modal
      </button>
    </main>
  );
};
export default Home;
