import React, { Component, Fragment } from "react";
import "../css/index.css";
import { getAllRecipes } from "../helpers/recipeTable";

class DisplayRecipes extends Component {
  state = {
    recipes: []
  };

  async componentDidMount() {
    getAllRecipes().then(data => {
      this.setState({
        recipes: data.Items
      });
    });
  }

  render() {
    const { displayRecipe } = this.props;
    const { recipes } = this.state;
    return (
      <div className="mt-5">
        {recipes.length > 0 && (
          <Fragment>
            {recipes.map((recipe, index) => (
              <Fragment key={index}>
                <div onClick={() => displayRecipe(recipe.recipe_id)}>{recipe.recipe.title}</div>
              </Fragment>
            ))}
          </Fragment>
        )}
      </div>
    );
  }
}

export default DisplayRecipes;
