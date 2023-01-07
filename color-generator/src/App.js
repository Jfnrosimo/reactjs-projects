import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section>
        <h1 className="text-3xl text-center my-4">color generator</h1>
      </section>
      <form className="text-center mt-10" onSubmit={handleSubmit}>
        <input
          className={`${
            error ? "border-2 border-red-500" : null
          } rounded px-2 py-1`}
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15032"
        />
        <button className=" bg-green-400 mx-3 px-4 py-1 rounded" type="submit">
          submit
        </button>
      </form>
      <section className="py-5 px-4 mt-2 lg:flex lg:flex-row lg:flex-wrap">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
