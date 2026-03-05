import "./App.css";
import Room from "./Room";

const House = (props) => (
  <>
    <div>This is a house called {props.name}</div>
    <Room></Room>
  </>
);

export default House;
