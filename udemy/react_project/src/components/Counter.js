import { useReducer } from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, counter: state.counter + 1 };
    case "-":
      return { ...state, counter: state.counter - 1 };
    case "reset":
      return initState;
    default:
      return state;
  }
};
const Counter = () => {
  const [count1, dispatch1] = useReducer(reducer, initState);
  const [count2, dispatch2] = useReducer(reducer, initState);
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Counter1<Badge color="secondary">{count1.counter}</Badge>
        </Button>
        <Button color="primary" outline>
          Counter2<Badge color="secondary">{count2.counter}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch1({ type: "+" })}>
          +
        </Button>
        <Button color="dark" onClick={() => dispatch1({ type: "-" })}>
          -
        </Button>
        <Button color="danger" onClick={() => dispatch1({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch2({ type: "+" })}>
          +
        </Button>
        <Button color="dark" onClick={() => dispatch2({ type: "-" })}>
          -
        </Button>
        <Button color="danger" onClick={() => dispatch2({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
