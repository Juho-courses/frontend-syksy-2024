import { useState } from "react";
import KurssiItem from "./KurssiItem";

function App() {
  let courses_orig = [
    "java",
    "git",
    "tilastotiede",
    "frontti",
    "ohjelmointi2",
    "git",
  ];

  const [courses, setCourses] = useState(courses_orig);
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log(text);
    setCourses([...courses, text]);
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

      <ul>
        {courses.map((kurssi, i) => {
          return <KurssiItem key={i} name={kurssi} />;
        })}
      </ul>
    </>
  );
}

export default App;
