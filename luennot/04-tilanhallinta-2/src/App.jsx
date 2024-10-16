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
      <h1>moro</h1>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={handleClick}>save</button>
      </div>

      <KurssiLista />
    </>
  );
}

export default App;
