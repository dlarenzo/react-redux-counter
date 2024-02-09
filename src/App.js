import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment(12))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable information i shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
