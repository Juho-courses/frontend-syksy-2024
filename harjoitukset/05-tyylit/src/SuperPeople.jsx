import usePeepsStore from "./stores/usePeepsStore";
import SuperPerson from "./SuperPerson";

function SuperPeople() {
  const peeps = usePeepsStore((state) => state.peeps);
  return (
    <div className="mt-6">
      <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Known superpeople:
      </h3>
      {peeps.length > 0 && (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {peeps.map((peep, i) => {
            return (
              <SuperPerson
                key={i}
                name={peep.name}
                superpower={peep.superpower}
              />
            );
          })}
        </ul>
      )}
      {peeps.length == 0 && <p>No superpeople</p>}
    </div>
  );
}

export default SuperPeople;
