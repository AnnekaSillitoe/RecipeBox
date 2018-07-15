import React, {Component, Fragment} from "react";
import "../css/index.css";
import AddRecipe from "./AddRecipe";
import DisplayRecipes from "./DisplayRecipes";
import DisplayRecipe from "./DisplayRecipe";

class App extends Component {
  state = {
    displayAdd: false,
    displayRecipe: null
  };

  displayRecipe = (recipeId) => {
    this.setState({
      displayRecipe: recipeId,
    })
  };

  redirectBack = (location) => {
    const display = location === "addRecipe" ? "displayAdd" : "displayRecipe";
    this.setState({
      [display]: false
    });
  };

  render() {
    const { displayAdd, displayRecipe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        {!displayRecipe &&
        <Fragment>
        {!displayAdd && (
          <div className="mt-5">
            <button className="btn btn-dark float-right mr-3" onClick={() => this.setState({ displayAdd: true })}>
              Add recipe
            </button>
          </div>
        )}
        {displayAdd && <AddRecipe redirectBack={this.redirectBack}/>}
        {!displayAdd && <DisplayRecipes displayRecipe={this.displayRecipe} />}
        </Fragment>}
        {typeof displayRecipe === "string" && <DisplayRecipe recipeId={displayRecipe} redirectBack={this.redirectBack}/>}
      </div>
    );
  }
}

export default App;
