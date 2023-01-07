import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  return (
    <article
      className={`${index > 10 ? "text-white" : null} py-10 lg:w-2/12`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="ml-5">{weight}%</p>
      <p className="ml-5">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
