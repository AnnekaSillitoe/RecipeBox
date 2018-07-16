import React, { Component, Fragment } from "react";
import "../css/index.css";
import { addRecipe } from "../helpers/recipeTable";

class AddRecipe extends Component {
  state = {
    recipe: {
      title: "",
      ingredients: [
        {
          name: "",
          quantity: ""
        }
      ],
      method: [""],
      photo: " "
    }
  };

  onChange = event => {
    event.preventDefault();
    const recipe = Object.assign({}, this.state.recipe);
    if (event.target.name.includes("ingredient")) {
      const ingredientKey = event.target.name.split(".")[1];
      const ingredientNumber = event.target.name.split(".")[2];
      recipe.ingredients[ingredientNumber][ingredientKey] = event.target.value;
    } else if (event.target.name.includes("method")) {
      const item = event.target.name.split(".")[1];
      recipe.method[item] = event.target.value;
    } else {
      recipe.title = event.target.value;
    }
    this.setState({
      recipe
    });
  };

  addIngredientsBox = (e) => {
    e.preventDefault();
    const recipe = Object.assign({}, this.state.recipe);
    recipe.ingredients.push({
      name: "",
      quantity: ""
    });
    this.setState({
      recipe
    });
  };

  addMethodBox = (e) => {
  e.preventDefault();
    const recipe = Object.assign({}, this.state.recipe);
    recipe.method.push("");
    this.setState({
      recipe
    });
  };

  render() {
    const { recipe } = this.state;
    const { redirectBack } = this.props;
    return (
      <Fragment>
        <button
          className="btn btn-outline-dark ml-2 mt-1"
          onClick={() => redirectBack("addRecipe")}
        >
          Back
        </button>
        <div className="mt-2">
          <form
            className="text-center container"
            onSubmit={e => addRecipe(this.state.recipe, e)}
          >
            <h2>Add a recipe</h2>
            <div className="mt-3">
              <div className="form-group">
                <label htmlFor="titleInput">Title</label>
                <input
                  className="form-control"
                  name="title"
                  placeholder="Title"
                  value={recipe.title}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div>
              <label>Ingredients</label>
              <div className="form-group">
                {recipe.ingredients.map((ingredient, index) => (
                  <div className="form-row mb-2" key={index}>
                    <input
                      className="form-control col-8"
                      name={`ingredient.name.${index}`}
                      placeholder={`Name ${index + 1}`}
                      value={ingredient.name}
                      onChange={this.onChange}
                    />
                    <input
                      className="form-control col-3 offset-1"
                      name={`ingredient.quantity.${index}`}
                      placeholder={`Quantity`}
                      value={ingredient.quantity}
                      onChange={this.onChange}
                    />
                  </div>
                ))}
                <button
                  className="btn btn-outline-dark"
                  onClick={(e) => this.addIngredientsBox(e)}
                >
                  Add items
                </button>
              </div>
            </div>
            <div>
              <label>Method</label>
              <div className="form-group">
                {recipe.method.map((method, index) => (
                  <input
                    className="form-control mb-2"
                    name={`method.${index}`}
                    key={index}
                    placeholder={`Step ${index + 1}`}
                    value={method}
                    onChange={this.onChange}
                  />
                ))}
                <button
                  className="btn btn-outline-dark"
                  onClick={(e) => this.addMethodBox(e)}
                >
                  Add Step
                </button>
              </div>
            </div>
            <button
              className="btn btn-dark"
              onClick={e => addRecipe(this.state.recipe, e)}
            >
              Submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AddRecipe;
