import React, { Component } from "react";
import classNames from "classnames";
import "./TodoItem.css";
import checkImg from "../img/check.svg";
import unCheckImg from "../img/uncheck.svg";

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = unCheckImg;
    if (item.isComplete) url = checkImg;
    return (
      <div
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete
        })}
      >
        <img onClick={onClick} src={url} width={32} height={32} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
