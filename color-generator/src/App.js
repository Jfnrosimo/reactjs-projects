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
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <h3>color generator</h3>
      </section>
      <form onSubmit={handleSubmit}>
        <input
          className={`${error ? "border-2 border-red-500" : null}`}
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15032"
        />
        <button type="submit">submit</button>
      </form>
      <section>
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;
