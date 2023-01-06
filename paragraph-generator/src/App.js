import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="p-5 lg:min-h-96 lg:mt-20">
      <h3 className="text-5xl text-center uppercase font-semibold lg:font-bold lg:py-14">
        tired of boring lorem ipsum?
      </h3>
      <form className="lg:text-center" onSubmit={handleSubmit}>
        <label className=" text-lg" htmlFor="amout">
          Paragraphs:
        </label>
        <input
          className="ml-2 mr-4 w-1/4 border border-zinc-600 pl-2 rounded lg:text-lg"
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className=" bg-cyan-300 px-3 py-1 rounded uppercase lg:text-xl"
          type="submit"
        >
          generate
        </button>
      </form>
      <article className="text-center mt-5 p-3">
        {text.map((item, index) => (
          <p className="lg:text-md" key={index}>
            {item}
          </p>
        ))}
      </article>
    </section>
  );
};

export default App;
