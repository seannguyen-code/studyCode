import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItems";

function App() {
  var todoItem = [
    { title: "Mua yasuo", isComplete: true },
    { title: "Tập chơi yasuo", isComplete: true },
    { title: "Thông thạo 7 yasuo" },
    { title: "Thách đấu yasuo" }
  ];
  return (
    <div className="App">
      {todoItem.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
