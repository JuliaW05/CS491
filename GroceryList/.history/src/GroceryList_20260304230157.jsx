import "./App.css";
import { useState } from "react";

const GroceryList = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    return (
        <div>
        <input type="text" id="itemInput"/>
        <button onClick={() => addCount((count) => count - 1)}>-</button>
        </div>
    )

}

export default GroceryList;
