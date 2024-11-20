import { useState } from "react";

function App() {
  const [ukkelit, setUkkelit] = useState([
    { nimi: "Veikko", ika: 3 },
    { nimi: "Vuokko", ika: 1 },
    { nimi: "Keke", ika: 1 },
  ]);
  return (
    <div>
      <h1>softa</h1>

      <ul>
        {ukkelit.map((ukko, i) => {
          return (
            <li key={i}>
              <Ukko ukkeli={ukko} kaupunki={"Pori"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Ukko({ kaupunki, ukkeli }) {
  return (
    <li>
      {kaupunki}: {ukkeli["nimi"]} - {ukkeli["ika"]}
    </li>
  );
}

export default App;
