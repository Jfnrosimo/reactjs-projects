import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div>
        <h1>Oops! Page not found..</h1>
        <Link to="/">Back Home</Link>
      </div>
      <h2>error page</h2>
    </section>
  );
};

export default Error;
