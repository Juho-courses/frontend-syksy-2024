import { useState } from "react";

function PersonCreator({ savePerson }) {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");

  const handleSave = () => {
    const p = { name, superpower: power };
    setName("");
    setPower("");

    savePerson(p);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        value={power}
        onChange={(e) => setPower(e.target.value)}
        placeholder="power"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default PersonCreator;
