import React, { Component, Fragment } from "react";
import AddRecipe from "../AddRecipe";
import DisplayRecipes from "../DisplayRecipes";
import DisplayRecipe from "../DisplayRecipe";
import Header from "../Header/Header";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

class App extends Component {
  state = {
    displayAdd: false,
    displayRecipe: null
  };

  displayRecipe = recipeId => {
    this.setState({
      displayRecipe: recipeId
    });
  };

  redirectBack = location => {
    const display = location === "addRecipe" ? "displayAdd" : "displayRecipe";
    this.setState({
      [display]: false
    });
  };

  displayAddRecipe = () => {
    this.setState({ displayAdd: true });
  };

  render() {
    const { displayAdd, displayRecipe } = this.state;
    return (
      <div className="App">
        <Header />
        {!displayRecipe && (
          <Fragment>
            {!displayAdd && (
              <ButtonPrimary
                buttonClasses="float-right mt-1 mr-3"
                onClick={this.displayAddRecipe}
                buttonText="Add a recipe"
              />
            )}
            {displayAdd && <AddRecipe redirectBack={this.redirectBack} />}
            {!displayAdd && (
              <DisplayRecipes displayRecipe={this.displayRecipe} />
            )}
          </Fragment>
        )}
        {typeof displayRecipe === "string" && (
          <DisplayRecipe
            recipeId={displayRecipe}
            redirectBack={this.redirectBack}
          />
        )}
      </div>
    );
  }
}

export default App;
