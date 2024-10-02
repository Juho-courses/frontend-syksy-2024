import KurssiItem from "./KurssiItem";

function App() {
  let courses = [
    "java",
    "git",
    "tilastotiede",
    "frontti",
    "ohjelmointi2",
    "git",
  ];

  return (
    <>
      <h1>moro</h1>

      <ul>
        {courses.map((kurssi, i) => {
          return <KurssiItem key={i} name={kurssi} />;
        })}
      </ul>

      <div>
        <pre>{JSON.stringify(courses, null, 2)}</pre>
      </div>

      <ul>
        <li>git</li>
        <li>java</li>
        <li>tilastotiede</li>
      </ul>
    </>
  );
}

export default App;
