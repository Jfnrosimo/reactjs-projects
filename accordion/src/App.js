import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className=" bg-purple-900 h-screen flex justify-center align-middle p-5">
      <div className="bg-gray-300 h-auto my-auto rounded p-5">
        <h3>questions and answers about login</h3>
        <section className="">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
