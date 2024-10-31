import KurssiItem from "./KurssiItem";
import useStore from "./store/useStore";

function KurssiLista() {
  const courses = useStore((state) => state.courses);
  return (
    <div>
      <ul>
        {courses.map((kurssi, i) => {
          return <KurssiItem key={i} name={kurssi} />;
        })}
      </ul>
    </div>
  );
}

export default KurssiLista;
