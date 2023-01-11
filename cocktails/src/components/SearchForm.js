import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mx-3 my-10 border rounded border-zinc-300 bg-slate-400 lg:w-3/5 lg:mx-auto lg:my-20">
      <form className="px-4 py-2 lg:py-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            className="mb-2 text-md lg:text-lg lg:font-semibold"
            htmlFor="name"
          >
            Search for you Cocktail
          </label>
          <input
            className="pl-2"
            type="text"
            id="name"
            placeholder="Search here..."
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
