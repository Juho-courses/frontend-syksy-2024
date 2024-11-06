import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  async function fetchData() {
    const URL = "https://api.chucknorris.io/jokes/random";
    let response = await fetch(URL);
    let json = await response.json();
    let value = json["value"];
    setJokes([...jokes, value]);
  }
  const clickHandler = () => {
    console.log("asdasd");
    fetchData();
  };
  const deleteJoke = (joke) => {
    console.log(joke);
    let new_jokes = jokes.filter((j) => j != joke);
    setJokes(new_jokes);
  };
  return (
    <div>
      <h1>Tänään kerrotaan vitsejä.</h1>
      <button onClick={clickHandler}>Hae vitsi</button>
      <p>Listataan niitä tänne</p>
      {/* <pre>{JSON.stringify(jokes, null, 2)}</pre> */}

      {jokes.length > 0 && (
        <ul>
          {jokes.map((joke, i) => {
            return (
              <li
                onClick={() => {
                  deleteJoke(joke);
                }}
                key={i}
              >
                {joke}
              </li>
            );
          })}
        </ul>
      )}

      {jokes.length == 0 && <p>Ei vitsejä</p>}
    </div>
  );
}

export default App;
