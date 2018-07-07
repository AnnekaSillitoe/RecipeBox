import React, {Component} from 'react';
import "../css/index.css";

class AddRecipe extends Component {
  state = {
    recipe: {
      title: "",
      ingredients: [
        {
          name: "tomatoes",
          quantity: "2"
        }
      ],
      method: ["",""],
      photo: ""
    },
    title: "",
    ingredient: {
      name: "tomatoes",
      quantity: "2"
    },
    method: ""
  };

  onChange = (event) => {
    const update = [event.target.name] = event.target.value;

    this.setState({
      [event.target.name]: update
    });
    console.log(this.state[event.target.name]);
  };

  render() {
    const {recipe, title, ingredient, method} = this.state;
    return (
      <div className="mt-5">
        <header>Add a recipe</header>
        <div className="mt-3">
          <label>Title</label>
          <input name="title" placeholder="Title" value={title} onChange={this.onChange}/>
        </div>
        <div>
          <label>Ingredients</label>
          <input placeholder="Item"/>
          <input placeholder="Quantity"/>
        </div>
        <div>
          <label>Method</label>
          <input name="method" placeholder="Step" value={method} onChange={this.onChange}/>
        </div>
      </div>
    );
  }
}

export default AddRecipe;
