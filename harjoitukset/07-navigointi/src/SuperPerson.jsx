import usePeepsStore from "./stores/usePeepsStore";

function SuperPerson({ name, superpower }) {
  const deletePerson = usePeepsStore((state) => state.deletePerson);
  return (
    <li
      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 hover:cursor-pointer"
      onClick={() => {
        deletePerson({ name, superpower });
      }}
    >
      {name}: {superpower}
    </li>
  );
}

export default SuperPerson;
