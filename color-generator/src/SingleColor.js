import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`${index > 10 ? "text-white" : null} h-36 py-10 lg:w-2/12`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="ml-5">{weight}%</p>
      <p className="ml-5">{hexValue}</p>
      {alert && <p className="ml-5">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
