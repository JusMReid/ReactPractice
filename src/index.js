import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./styles.css";

const App = props => (
  <div>
    <h2>{props.count}</h2>
  </div>
);

var count = 0;

function App_old() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
//ReactDOM.render(<App count={count++} />, rootElement);

setInterval(() => render(<App count={count++} />, rootElement), 1000);
