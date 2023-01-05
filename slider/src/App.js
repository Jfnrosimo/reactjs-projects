import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section>
      <div>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //More stuff to be added

          return (
            <article key={id}>
              <img src={image} alt={image} />
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
              <FaQuoteRight />
            </article>
          );
        })}
        <button>
          <FiChevronLeft />
        </button>
        <button>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
