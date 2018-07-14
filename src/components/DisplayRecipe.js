import React, { Component } from "react";
import "../css/index.css";

class DisplayRecipe extends Component {
  state = {
    recipe: {}
  };

  render() {
    // const { recipe } = this.state;
    return (
      <div className="mt-5">
        Hello world
        {/*<h2>Ingredients</h2>*/}
        {/*{recipe.recipe.ingredients.map((ingredient) => (*/}
        {/*<Fragment>*/}
        {/*<div>{ingredient.quantity}</div><div>{ingredient.name}</div>*/}
        {/*</Fragment>*/}
        {/*))}*/}
      </div>
    );
  }
}

export default DisplayRecipe;
