import { useState, useRef, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

  return (
    <div>
      <h1>Previous: {prevCount.current}</h1>
      <h1>Current: {count}</h1>

      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;
