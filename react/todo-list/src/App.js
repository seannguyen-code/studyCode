import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItems";
import tick from "./img/tick.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todoItems: [
        { title: "Mua yasuo", isComplete: true },
        { title: "Tập chơi yasuo", isComplete: true },
        { title: "Thông thạo 7 yasuo" },
        { title: "Thách đấu yasuo" }
      ]
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return event => {
      const { todoItems } = this.state;
      this.setState({
        todoItems: todoItems.map(clickItem =>
          clickItem !== item ? { ...clickItem } : { ...clickItem, isComplete: !item.isComplete }
        )
      });
    };
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        todoItems: [{ title: text, isComplete: false }, ...this.state.todoItems]
      });
    } else {
    }
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input
              value={newItem}
              onChange={this.onChange}
              type="text"
              placeholder="Add a new item"
              onKeyUp={this.onKeyUp}
            />
          </div>
          {todoItems.length > 0 &&
            todoItems.map((item, index) => (
              <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />
            ))}
        </div>
      );
    } else {
      return <div className="App">{todoItems.length === 0 && "Nothing here."}</div>;
    }
  }
}

export default App;
