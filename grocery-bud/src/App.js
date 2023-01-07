import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      //Display alert
      return;
    } else if (name && isEditing) {
      //Deal with edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "Value changed");
    } else {
      //Show alert
      showAlert(true, "success", "Item added");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show: show, type: type, message: message });
  };

  const clearList = () => {
    showAlert(true, "danger", "Empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item removed");
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <section className="bg-slate-50 mx-5 items-center h-2/3 w-5/6 p-2">
        <form className=" h-44" onClick={handleSubmit}>
          <h3 className="text-center my-2 text-3xl">Grocery Bud</h3>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <div className="text-center mt-10">
            <input
              className=" bg-gray-200 mx-2 px-2"
              type="text"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button className="bg-blue-400 px-2 py-1 rounded" type="submit">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="flex flex-col">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button
              className="mx-8 border text-red-600 rounded hover:border-red-600"
              onClick={clearList}
            >
              Clear Items
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
