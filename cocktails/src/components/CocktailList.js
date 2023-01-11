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
      <h3 className="text-center text-2xl font-bold">Cocktails</h3>
      <div>
        {cocktails.map((item) => {
          console.log(item);
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
