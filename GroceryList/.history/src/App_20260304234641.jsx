import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GroceryList from "./GroceryList";

function App() {
  return (
    <>
      <div className="container text-center mt-6">
        <h1 className="mb-6">Grocery List</h1>
        <GroceryList></GroceryList>
      </div>
    </>
  );
}

export default App;
