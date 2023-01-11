import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No cocktails matched your search</h2>;
  }

  return (
    <section className="">
      <h3 className="text-center text-2xl font-bold lg:text-4xl">Cocktails</h3>
      <div className="lg:flex lg:justify-center lg:flex-wrap">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
