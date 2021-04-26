import axios from "axios";
import { useEffect, useReducer } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const initialState = {
  loading: true,
  error: "",
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        loading: false,
        error: "",
        todos: action.payload,
      };

    case "SET_ERROR":
      return {
        loading: false,
        error: "ERROR",
        todos: [],
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => dispatch({ type: "SET_DATA", payload: res.data }))
      .catch((err) => dispatch({ type: "SET_ERROR", payload: [] }));
  }, []);

  const listMarkup = (
    <ListGroup>
      {state.todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}{" "}
          <Badge color={todo.completed ? "success" : "danger"}>Status</Badge>{" "}
        </ListGroupItem>
      ))}
    </ListGroup>
  );

  return (
    <div className="App">
      {state.loading ? "Loading" : state.error ? state.error : listMarkup}
      {}
    </div>
  );
};

export default App;
