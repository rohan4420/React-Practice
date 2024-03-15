import { useState } from "react";
import data from "./data";

function App() {
  const [person, setPerson] = useState(data);

  const handleRemoveAll = () => {
    setPerson([]);
  };
  const handleSingleRemove = (id) => {
    const newItems = person.filter((person) => person.id !== id);
    setPerson(newItems);
  };
  return (
    <div className="container">
      <h3>Birthday Reminder Starter</h3>

      {person.map((person) => (
        <div key={person.id} className="person">
          <img
            style={{ width: "200px", height: "200px" }}
            src={person.image}
            name={person.name}
          />
          <div>
            <button
              style={{ background: "red", color: "black" }}
              type="button"
              onClick={() => handleSingleRemove(person.id)}
            >
              Remove me
            </button>
          </div>
          <h1>
            {person.name} , age = {person.age}
          </h1>
        </div>
      ))}
      <button
        type="button"
        style={{ background: "black", color: "white" }}
        onClick={handleRemoveAll}
      >
        Remove all
      </button>
    </div>
  );
}

export default App;
