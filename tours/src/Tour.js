import { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="shadow-md p-4 my-4 mx-5">
      <img src={image} alt={image} />
      <footer className="grid">
        <div>
          <h4 className="font-semibold my-2 text-lg">{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          className="text-sm text-blue-400"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show Less" : "Read More"}
        </button>
        <button
          className="border-2 border-red-400 m-auto my-3 py-2 w-1/2"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
