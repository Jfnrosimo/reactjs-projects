import React, { useState, useEffect } from "react";

import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <main className="h-screen flex justify-center items-center">
      <section className="w-3/4 h-2/3">
        <div className="flex flex-col">
          <h1 className="text-center py-2 my-0">experience</h1>
          <div className="h-1 w-24  bg-teal-500 mx-auto"></div>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-4 lg:mt-5 sm:flex sm:flex-col">
          <div className="mt-5 mx-2 lg:flex lg:flex-col lg:w-1/2 sm:flex sm:flex-row">
            {jobs.map((item, index) => {
              return (
                <button
                  className="text-left px-6 py-1 mx-3
                  hover:border-l-2 hover:border-l-teal-600 hover:text-teal-600"
                  key={item.id}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="p-3">
            <h3>{title}</h3>
            <h4 className="rounded bg-slate-200 text-slate-600 px-2 py-1 inline-block">
              {company}
            </h4>
            <p className="text-slate-600">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="flex items-center gap-2 mt-5" key={index}>
                  <FaAngleDoubleRight className="text-teal-600 text-2xl" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  );
};

export default App;
