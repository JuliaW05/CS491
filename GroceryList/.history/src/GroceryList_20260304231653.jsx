import "./App.css";
import { useState } from "react";

const GroceryList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setList([...list, item]);
    
  }

  return (
    <div>
      <input type="text" id="itemInput" />
      <button onClick={addItem}>+</button>

      <ul> {list.map((i,index) => ( <li key={index}>{i}</li> ))}</ul>
    </div>
  );
};

export default GroceryList;
