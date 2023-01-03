import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main className=" bg-purple-600 min-h-screen">
      <section>
        {data.map((question) => (
          <SingleQuestion
            id={question.id}
            title={question.title}
            info={question.info}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
