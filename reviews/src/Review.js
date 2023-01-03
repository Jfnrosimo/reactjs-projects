import React, { useState } from "react";
import people from "./data";

//Import UI
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    console.log(Math.random());
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="border shadow-md m-10 flex justify-center flex-col text-center">
      <div className="mx-auto mt-5 relative">
        <img
          className=" rounded-full object-cover w-24 h-24"
          src={image}
          alt={image}
        />
        <span className="absolute top-0 left-0 text-blue-500">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="mt-4 text-xl font-semibold">{name}</h4>
      <p className="capitalize text-blue-500">{job}</p>
      <p>{text}</p>
      <div className="mt-2 text-blue-500">
        <button className="mx-1" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="mx-1" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button
        onClick={() => randomPerson()}
        className="text-blue-500 bg-blue-200 rounded py-2 w-1/3 self-center"
      >
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
