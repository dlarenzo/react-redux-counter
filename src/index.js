import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

//REACT VERSION
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// import { createStore } from "redux";

// // STORE -> GLoBALIZED STATE

// // ACTION -> DESCRIBES WHAT YOU WANT TO DO
// // ACTION INCREMENT
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// // ACTION REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// //CREATE STORE
// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH -> EXECUTE THE ACTION
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
