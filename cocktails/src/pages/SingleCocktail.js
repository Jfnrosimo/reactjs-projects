import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(
    (item) => {
      setLoading(true);
      async function getCocktail() {
        try {
          const response = await fetch(`${url}${id}`);
          const data = await response.json();
          if (data.drinks) {
            const {
              strDrink: name,
              strDrinkThumb: image,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = data.drinks[0];

            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            ];

            const newCocktail = {
              name,
              category,
              image,
              info,
              glass,
              instructions,
              ingredients,
            };

            setCocktail(newCocktail);
          } else {
            setCocktail(null);
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      getCocktail();
    },
    [id]
  );

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2>no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className=" flex flex-col justify-center items-center my-10">
        <Link className="bg-green-600 py-1 px-2 rounded" to="/">
          BACK HOME
        </Link>
        <h2 className="text-3xl py-2 font-bold">{name}</h2>
        <div className="mx-5">
          <img src={image} alt={name} />
          <div className="mt-2">
            <p className="font-semibold">
              <span className="bg-green-300 mr-1">Name : </span>
              {name}
            </p>
            <p className="font-semibold">
              <span className="bg-green-300 mr-1">Category : </span>
              {category}
            </p>
            <p className="font-semibold">
              <span className="bg-green-300 mr-1">Info : </span>
              {info}
            </p>
            <p className="font-semibold">
              <span className="bg-green-300 mr-1">Glass : </span>
              {glass}
            </p>
            <p className="font-semibold">
              <span className="bg-green-300 mr-1">Instructions : </span>
              {instructions}
            </p>
            <p className="font-semibold">
              <span className="bg-green-300 mr-1">Ingredients : </span>
              {ingredients.map((item, index) => {
                return item && index < ingredients.length - 2 ? (
                  <span key={index}>{item}, </span>
                ) : (
                  <span key={index}>{item}</span>
                );
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
