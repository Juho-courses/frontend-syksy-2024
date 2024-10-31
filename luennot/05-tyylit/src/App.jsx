import { useState } from "react";
import KurssiLista from "./KurssiLista";
import useStore from "./store/useStore";

function App() {
  const [text, setText] = useState("");

  const addCourse = useStore((state) => state.addCourse);

  const handleClick = () => {
    // console.log(text);
    addCourse(text);
    setText("");
  };

  return (
    <>
      <h1 className="text-3xl font-bold">moro</h1>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-r-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400"
          onClick={handleClick}
        >
          save
        </button>
      </div>

      <KurssiLista />
    </>
  );
}

export default App;
