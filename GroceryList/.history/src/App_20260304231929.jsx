import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GroceryList from "./GroceryList";

function App() {
  return (
    <>
      <h1>Grocery List</h1>
      <div>
        <GroceryList></GroceryList>
      </div>
    </>
  );
}

export default App;
