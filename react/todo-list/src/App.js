import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Mua yasuo", isComplete: true },
        { title: "Tập chơi yasuo", isComplete: true },
        { title: "Thông thạo 7 yasuo" },
        { title: "Thách đấu yasuo" }
      ]
    };
  }

  onItemClicked(item) {
    return event => {
      const { todoItems } = this.state;
      this.setState({
        todoItems: todoItems.map(clickItem =>
          clickItem !== item
            ? { ...clickItem }
            : { ...clickItem, isComplete: !item.isComplete }
        )
      });
    };
  }

  render() {
    const { todoItems } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          {todoItems.length > 0 &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)}
              />
            ))}
        </div>
      );
    } else {
      return (
        <div className="App">{todoItems.length === 0 && "Nothing here."}</div>
      );
    }
  }
}

export default App;
