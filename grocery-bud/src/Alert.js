import React, { useEffect } from "react";

const Alert = ({ type, message, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <p
      className={`${
        type === "danger" ? "bg-red-300" : "bg-green-300"
      } text-center rounded absolute left-0 right-0 mx-auto w-48`}
    >
      {message}
    </p>
  );
};

export default Alert;
