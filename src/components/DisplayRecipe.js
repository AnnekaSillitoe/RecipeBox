import React, { Component, Fragment } from "react";
import { getRecipe } from "../helpers/recipeTable";
import ButtonOutline from "./Buttons/ButtonOutline/ButtonOutline";

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
      <Fragment>
        <ButtonOutline
          buttonClasses="ml-2 mt-1"
          onClick={() => redirectBack("displayRecipe")}
          buttonText="Back"
        />
        <div className="mt-2">
          {Object.keys(recipe).length > 0 && (
            <div className="container">
              {/*<img src="" className="col-12 d-sm-none" style={{height: 250}} alt="Recipe"/>*/}
              <h2 className="text-center">{recipe.title}</h2>
              <div className="pt-3 d-sm-inline-block">
                <h4 className="pb-2">Ingredients</h4>
                {recipe.ingredients.map((ingredient, index) => (
                  <div className="ml-3" key={index}>
                    <div className="d-inline-block mr-2">
                      {ingredient.quantity}
                    </div>
                    <div className="d-inline-block">{ingredient.name}</div>
                  </div>
                ))}
              </div>
              {/*<img src="" style={{height: 300}} className="float-right d-none d-sm-inline-block" alt="Recipe"/>*/}
              <div className="pt-3 pb-3">
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
      </Fragment>
    );
  }
}

export default DisplayRecipe;
