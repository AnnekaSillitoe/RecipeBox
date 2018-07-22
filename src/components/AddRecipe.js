import React, { Component, Fragment } from "react";
import cloneDeep from "lodash.clonedeep";
import { addRecipe } from "../helpers/recipeTable";
import ButtonOutline from "./Buttons/ButtonOutline/ButtonOutline";
import { AlertList } from "react-bs-notifier";
import ButtonPrimary from "./Buttons/ButtonPrimary/ButtonPrimary";
import InputField from "./Inputs/InputField";

class AddRecipe extends Component {
  constructor() {
    super();
    this.recipe = {
      title: "",
      ingredients: [
        {
          name: "",
          quantity: ""
        }
      ],
      method: [""],
      photo: " "
    };
    this.state = {
      recipe: cloneDeep(this.recipe),
      alert: []
    };
  }

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

  addIngredientsBox = e => {
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

  addMethodBox = e => {
    e.preventDefault();
    const recipe = Object.assign({}, this.state.recipe);
    recipe.method.push("");
    this.setState({
      recipe
    });
  };

  resetForm = () => {
    this.setState({
      ...this.state.recipe,
      recipe: this.recipe
    });
  };

  addNewRecipe = e => {
    e.preventDefault();
    let message;
    const newIngredients = this.state.recipe.ingredients.map(ingredientItem => {
      let ingredients = ingredientItem;
      ingredients.quantity =
        ingredients.quantity === "" ? " " : ingredients.quantity;
      return ingredients;
    });
    const newRecipeObject = Object.assign({}, this.state.recipe);
    newRecipeObject.ingredients = newIngredients;

    const added = addRecipe(newRecipeObject);

    const alerts = [
      {
        id: new Date().getTime(),
        type: "danger",
        headline: "Whoops! That didn't work!"
      },
      {
        id: new Date().getTime(),
        type: "success",
        headline: "Success!"
      }
    ];

    added
      .then(() => {
        message = "You recipe has been added successfully.";
        alerts[1].message = message;
        this.setState({
          alert: [alerts[1]]
        });
        this.resetForm();
      })
      .catch(err => {
        message = err.message;
        if (message.includes("empty string")) {
          message =
            "One of your fields is empty. Please fix this before submitting again.";
        }
        alerts[0].message = message;
        this.setState({
          alert: [alerts[0]]
        });
      });
  };

  render() {
    const { recipe } = this.state;
    const { redirectBack } = this.props;
    return (
      <Fragment>
        <AlertList
          position="top-right"
          alerts={this.state.alert}
          timeout={5000}
          onDismiss={() => {
            this.setState({ alert: [] });
          }}
        />
        <ButtonOutline
          buttonClasses="ml-2 mt-1"
          onClick={() => redirectBack("addRecipe")}
          buttonText="Back"
        />
        <div className="mt-2">
          <form
            className="text-center container"
            onSubmit={e => this.addNewRecipe(e)}
          >
            <h2>Add a recipe</h2>
            <div className="mt-3">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <InputField
                  id="title"
                  onChange={this.onChange}
                  value={recipe.title}
                  name="title"
                  placeholder="Title"
                />
              </div>
            </div>
            <div>
              <label htmlFor="ingredients">Ingredients</label>
              <div className="form-group">
                {recipe.ingredients.map((ingredient, index) => (
                  <div className="form-row mb-2" key={index}>
                    <InputField
                      id="ingredients"
                      onChange={this.onChange}
                      value={ingredient.name}
                      inputClasses="col-8"
                      name={`ingredient.name.${index}`}
                      placeholder={`Name ${index + 1}`}
                    />
                    <InputField
                      id="ingredients"
                      onChange={this.onChange}
                      value={ingredient.quantity}
                      inputClasses="col-3 offset-1"
                      name={`ingredient.quantity.${index}`}
                      placeholder={`Quantity`}
                    />
                  </div>
                ))}
                <ButtonOutline
                  onClick={e => this.addIngredientsBox(e)}
                  buttonText="Add Items"
                />
              </div>
            </div>
            <div>
              <label htmlFor="method">Method</label>
              <div className="form-group">
                {recipe.method.map((method, index) => (
                  <InputField
                    id="method"
                    onChange={this.onChange}
                    value={method}
                    inputClasses="mb-2"
                    name={`method.${index}`}
                    key={index}
                    placeholder={`Step ${index + 1}`}
                  />
                ))}
                <ButtonOutline
                  onClick={e => this.addMethodBox(e)}
                  buttonText="Add Step"
                />
              </div>
            </div>
            <ButtonPrimary
              onClick={e => this.addNewRecipe(e)}
              buttonText="Submit"
            />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AddRecipe;
