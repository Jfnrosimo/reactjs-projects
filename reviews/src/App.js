import { useState } from "react";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="flex justify-center align-middle">
        <h2 className="text-center  mt-4 mx-auto border-b-2 border-b-blue-400 w-2/3">
          our reviews
        </h2>
        <div></div>
      </section>
      <Review />
    </main>
  );
}

export default App;
