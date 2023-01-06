import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  return (
    <article className="my-5 py-10" style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className={`${index > 9 ? "text-white" : null} ml-5`}>{weight}%</p>
    </article>
  );
};

export default SingleColor;
