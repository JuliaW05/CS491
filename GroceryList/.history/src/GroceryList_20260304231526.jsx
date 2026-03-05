import "./App.css";
import { useState } from "react";

const GroceryList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    set
  }

  return (
    <div>
      <input type="text" id="itemInput" />
      <button onClick={addItem}>+</button>

      <ul> {list.map((i,index) => ( </ul>
    </div>
  );
};

export default GroceryList;
