import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    //this.setState({count: this.state.count + 1})
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.increaseCount.bind(this)}>
            Increase Count
          </button>
        </div>
        <br />
        <div>
          <button onClick={() => this.increaseCount()}>Increase Count</button>
        </div>
        <br />
        <div>
          <button onClick={this.increaseCount}>Increase Count</button>
        </div>
        <br />
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

var count = 0;

// const function App_old() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
//ReactDOM.render(<App count={count++} />, rootElement);
render(<App count={count++} />, rootElement);
//setInterval(() => render(<App count={count++} />, rootElement), 1000);
