import "./App.css";
import { useState } from "react";

const GroceryList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setList([...list, item]);
    setItem("");
  };

  return (
    <div className="card p-4 shadow">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter an item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addItem}>
          +
        </button>
        <
        <ul className="list-group">
          {" "}
          {list.map((i, index) => (
            <li className="list-group-item" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroceryList;
