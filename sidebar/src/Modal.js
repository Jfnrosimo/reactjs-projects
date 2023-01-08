import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(isModalOpen);

  return (
    <div
      className={`${
        isModalOpen ? "visible z-10" : " hidden -z-10"
      } fixed top-0 left-0 h-full w-full grid place-items-center bg-gray-500 bg-opacity-50 transition-all duration-300 ease-linear`}
    >
      <div className="bg-gray-200 w-5/6 h-1/3 grid place-items-center relative">
        <h3>modal content</h3>
        <button
          type="button"
          className="text-red-500 absolute top-1 right-1"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
