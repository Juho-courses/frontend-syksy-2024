import SuperPerson from "./SuperPerson";

function SuperPeople() {
  const peeps = [
    { name: "Batman", superpower: "rich" },
    { name: "Wonder Woman", superpower: "speed" },
    { name: "Spiderman", superpower: "spidey sense" },
  ];

  return (
    <ul>
      {peeps.map((peep, i) => {
        return <SuperPerson name={peep.name} superpower={peep.superpower} />;
      })}
    </ul>
  );
}

export default SuperPeople;
