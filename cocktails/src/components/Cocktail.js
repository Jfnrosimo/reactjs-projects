import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article className="mx-8 my-10 border shadow-lg rounded lg:w-1/4">
      <div>
        <img className="rounded " src={image} alt={name} />
      </div>
      <div className="mx-3 my-2 flex flex-col">
        <h3 className="text-2xl font-bold">{name}</h3>
        <h4 className="text-md font-semibold">{glass}</h4>
        <p className=" opacity-70">{info}</p>
        <Link
          className=" self-center bg-green-600 rounded font-semibold px-2 hover:bg-lime-300"
          to={`/cocktail/${id}`}
        >
          DETAILS
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
