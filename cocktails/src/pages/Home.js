import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main className=" lg:mx-36">
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
