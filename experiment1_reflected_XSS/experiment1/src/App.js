import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor() {localStorage
    super();
    this.state = { value: "javascript:alert('Hacked!');" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <a href={this.state.value}>My Website</a>
      </form>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
