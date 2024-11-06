import SuperPeople from "./SuperPeople";
import PersonCreator from "./PersonCreator";

function MainBody() {
  return (
    <main className="flex-grow container mx-auto p-4">
      <PersonCreator />
      <SuperPeople />
    </main>
  );
}

export default MainBody;
