import { useContext } from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { CounterContext } from "../App";

import ComponentC from "./ComponentC";

const ComponentB = () => {
  const countercontext = useContext(CounterContext);
  const { counter, dispatch } = countercontext;

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Component B Counter<Badge color="secondary">{counter}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch({ type: "+" })}>
          +
        </Button>
        <Button color="dark" onClick={() => dispatch({ type: "-" })}>
          -
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>

      <ComponentC />
    </div>
  );
};

export default ComponentB;
