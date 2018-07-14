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

  addIngredientsBox = () => {
    const recipe = Object.assign({}, this.state.recipe);
    recipe.ingredients.push({
      name: "",
      quantity: ""
    });
    this.setState({
      recipe
    });
  };

  addMethodBox = () => {
    const recipe = Object.assign({}, this.state.recipe);
    recipe.method.push("");
    this.setState({
      recipe
    });
  };

  render() {
    const { recipe } = this.state;
    return (
      <div className="mt-5">
        <header>Add a recipe</header>
        <div className="mt-3">
          <label>Title</label>
          <input
            name="title"
            placeholder="Title"
            value={recipe.title}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <Fragment key={index}>
              <input
                name={`ingredient.name.${index}`}
                placeholder={`Name ${index + 1}`}
                value={ingredient.name}
                onChange={this.onChange}
              />
              <input
                name={`ingredient.quantity.${index}`}
                placeholder={`Quantity`}
                value={ingredient.quantity}
                onChange={this.onChange}
              />
            </Fragment>
          ))}
          <button onClick={count => this.addIngredientsBox(count)}>
            Add items
          </button>
        </div>
        <div>
          <label>Method</label>
          {recipe.method.map((method, index) => (
            <input
              name={`method.${index}`}
              key={index}
              placeholder={`Step ${index + 1}`}
              value={method}
              onChange={this.onChange}
            />
          ))}
          <button onClick={count => this.addMethodBox(count)}>Add items</button>
        </div>
        <button onClick={() => addRecipe(this.state.recipe)}>Submit</button>
      </div>
    );
  }
}

export default AddRecipe;
