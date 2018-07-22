import React, { Component, Fragment } from "react";
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
          <div className="ml-2">
            {recipes.map((recipe, index) => (
              <Fragment key={index}>
                <h5
                  className="cursor-pointer"
                  onClick={() => displayRecipe(recipe.recipe_id)}
                >
                  {recipe.recipe.title}
                </h5>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayRecipes;
