function SuperPerson({ name, superpower }) {
  return (
    <li
      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
      onClick={() => {
        deletePerson({ name, superpower });
      }}
    >
      {name}: {superpower}
    </li>
  );
}

export default SuperPerson;
