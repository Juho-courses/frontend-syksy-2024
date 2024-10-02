function KurssiItem({ name }) {
  return (
    <li
      onClick={() => {
        console.log(name);
      }}
    >
      {name}
    </li>
  );
}

export default KurssiItem;
