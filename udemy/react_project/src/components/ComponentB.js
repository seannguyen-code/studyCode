import { Button, ButtonGroup, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import useCounter from "../customHooks/useCounter";

const ComponentB = () => {
  const [counter, increment, decrement, reset] = useCounter(10);

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Component B Counter<Badge color="secondary">{counter}</Badge>
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
    </div>
  );
};

export default ComponentB;
