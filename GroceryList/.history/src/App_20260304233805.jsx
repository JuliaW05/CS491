import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GroceryList from "./GroceryList";

function App() {
  return (
    <>
      <div>
        <GroceryList></GroceryList>
      </div>
    </>
  );
}

export default App;
