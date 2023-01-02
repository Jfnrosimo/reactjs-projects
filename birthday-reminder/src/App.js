import { useState } from "react";

import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className="bg-pink-400  text-center flex flex-col min-h-screen p-6 overflow-hidden">
      <h1 className="text-3xl font-bold">birthday reminder</h1>
      <section className="bg-white mx-6 shadow-md shadow-zinc-600 rounded-sm p-4">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          className="bg-pink-400 w-full rounded mt-6 py-2"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
