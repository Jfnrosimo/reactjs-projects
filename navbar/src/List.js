import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="flex justify-between mx-5" key={id}>
            <p>{title}</p>
            <div>
              <button
                className="text-green-500 mx-1"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button className="text-red-500" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
