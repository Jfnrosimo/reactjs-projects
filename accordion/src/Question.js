import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="my-5 border border-zinc-500 p-3 max-w-xs">
      <header className="flex justify-between">
        <h4>{title}</h4>
        <button onClick={toggleInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="text-sm">{info}</p>}
    </article>
  );
};

export default Question;
