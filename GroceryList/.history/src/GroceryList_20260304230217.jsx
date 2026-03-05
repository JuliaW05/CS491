import "./App.css";
import { useState } from "react";

const GroceryList = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    return (
        <div>
        <input type="text" id="itemInput"/>
        <button onClick={() => addItem((list) => list.append(item))}>+</button>
        </div>
    )

}

export default GroceryList;
