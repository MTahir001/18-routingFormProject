import { Link } from "react-router-dom";
export default function EventsPage() {
  const DUMMY_EVENTS = [
    { id: "e1", title: "Tea" },
    { id: "e2", title: "Coffee" },
  ];
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
