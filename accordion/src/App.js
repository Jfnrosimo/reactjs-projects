import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className=" bg-purple-600 min-h-screen">
      <div>
        <h3>questions and answers about login</h3>
        <section>
          {data.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
