import { Button, ButtonGroup, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ComponentB from "./ComponentB";
import useCounter from "../customHooks/useCounter";

const ComponentA = () => {
  const [counter, increment, decrement, reset] = useCounter();

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Component A Counter<Badge color="secondary">{counter}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={increment}>
          +
        </Button>
        <Button color="dark" onClick={decrement}>
          -
        </Button>
        <Button color="danger" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>

      <ComponentB />
    </div>
  );
};

export default ComponentA;
