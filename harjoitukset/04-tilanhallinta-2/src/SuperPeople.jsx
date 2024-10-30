import usePeepsStore from "./stores/usePeepsStore";
import SuperPerson from "./SuperPerson";

function SuperPeople() {
  const peeps = usePeepsStore((state) => state.peeps);
  return (
    <ul>
      {peeps.map((peep, i) => {
        return (
          <SuperPerson key={i} name={peep.name} superpower={peep.superpower} />
        );
      })}
    </ul>
  );
}

export default SuperPeople;
