import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";

class Form extends React.Component {
  render() {
    return <p dangerouslySetInnerHTML={{ __html: this.props.text }}></p>;
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <textarea value={this.state.text} onChange={this.handleChange} />
        </form>
        <Form text={this.state.text}></Form>
      </div>
    );
  }
}

export default App;
