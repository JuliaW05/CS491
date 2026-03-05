import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GroceryList from "./GroceryList";

function App() {
  return (
    <>
      <div className="container text-center mt-5">
        <GroceryList></GroceryList>
      </div>
    </>
  );
}

export default App;
