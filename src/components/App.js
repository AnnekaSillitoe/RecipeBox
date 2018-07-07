import React, { Component } from "react";
import "../css/index.css";
import AddRecipe from "./AddRecipe";

class App extends Component {
  state = {
    displayAdd: false
  };

  render() {
    const { displayAdd } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        {!displayAdd && (
          <div className="mt-5">
            <button onClick={() => this.setState({ displayAdd: true })}>
              Add recipe
            </button>
          </div>
        )}
        {displayAdd && <AddRecipe />}
      </div>
    );
  }
}

export default App;
