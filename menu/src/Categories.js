import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div>
      <button onClick={() => filterItems("all")}>All</button>
      <button onClick={() => filterItems("breakfast")}>breakfast</button>
    </div>
  );
};

export default Categories;
