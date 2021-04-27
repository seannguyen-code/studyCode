import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, auth } from "./actions";

import "./App.css";

const App = () => {
  const count = useSelector((state) => state.count);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const authBtn = login ? "You are IN" : "You are OUT";

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h1>{authBtn}</h1>
      <button onClick={() => dispatch(auth())}>Login</button>
    </div>
  );
};

export default App;
