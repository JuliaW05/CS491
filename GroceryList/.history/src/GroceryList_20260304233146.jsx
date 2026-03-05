import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css.bootstrap.min.css';

const GroceryList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setList([...list, item]);
    setItem("");
  };

  return (
    <div>
        <h3>Enter an item:</h3>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)} />
      <button onClick={addItem}>+</button>

      <ul>
        {" "}
        {list.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
