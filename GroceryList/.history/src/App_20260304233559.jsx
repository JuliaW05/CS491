import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
