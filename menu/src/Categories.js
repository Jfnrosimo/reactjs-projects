import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex justify-center flex-row gap-3 mt-5">
      {categories.map((item) => (
        <button
          className="hover:bg-orange-700 hover:text-gray-200 px-2 py-1 rounded"
          key={item}
          onClick={() => filterItems(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
