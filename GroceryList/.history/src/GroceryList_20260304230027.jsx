import "./App.css";
import { useState } from "react";

const GroceryList = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    return (
        <input type="text" id="itemInput"/>
        <button onClick="addItem()"></button>
    )

}

export default GroceryList;
