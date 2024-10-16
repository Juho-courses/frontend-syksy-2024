import SuperPeople from "./SuperPeople";
import PersonCreator from "./PersonCreator";
import { useState } from "react";

function MainBody() {
  const peeps = [
    { name: "Batman", superpower: "rich" },
    { name: "Wonder Woman", superpower: "speed" },
    { name: "Spiderman", superpower: "spidey sense" },
  ];

  const savePerson = (p) => {
    setData([...data, p]);
  };

  const [data, setData] = useState(peeps);
  return (
    <div>
      <p>Tänne tulee asioita ja juttuja</p>
      <PersonCreator savePerson={savePerson} />
      <SuperPeople peeps={data} />
    </div>
  );
}

export default MainBody;
