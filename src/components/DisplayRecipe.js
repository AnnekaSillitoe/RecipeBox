import React, { Component, Fragment } from "react";
import "../css/index.css";
import { getRecipe } from "../helpers/recipeTable";

class DisplayRecipe extends Component {
  state = {
    recipe: {}
  };

  async componentDidMount() {
    await getRecipe(this.props.recipeId).then(data => {
      this.setState({
        recipe: data.Items[0].recipe
      });
    });
  }

  render() {
    const { recipe } = this.state;
    const { redirectBack } = this.props;
    return (
      <div className="mt-5">
        <button
          className="btn btn-outline-dark ml-5"
          onClick={() => redirectBack("displayRecipe")}
        >
          Back
        </button>
        {Object.keys(recipe).length > 0 && (
          <div className="container">
            <h2 className="text-center">{recipe.title}</h2>
            <div className="pt-3">
            <h4 className="pb-2">Ingredients</h4>
            {recipe.ingredients.map((ingredient, index) => (
              <div className="ml-3" key={index}>
                <div className="d-inline-block mr-2">{ingredient.quantity}</div>
                <div className="d-inline-block">{ingredient.name}</div>
              </div>
            ))}
            </div>
            <div className="pt-3">
            <h4 className="pb-2">Method</h4>
            {recipe.method.map((step, index) => (
              <Fragment key={index}>
                <div className="ml-3">{`${index + 1}. ${step}`}</div>
              </Fragment>
            ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayRecipe;
