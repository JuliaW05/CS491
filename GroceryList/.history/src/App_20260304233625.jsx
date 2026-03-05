import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GroceryList from "./GroceryList";

function App() {
  return (
    <>
      <h1><b>Grocery List</b</h1>
      <div>
        <GroceryList></GroceryList>
      </div>
    </>
  );
}

export default App;
