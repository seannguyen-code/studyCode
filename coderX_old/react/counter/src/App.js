import React from "react";
import "./styles.css";

import List from "./components/List";
import Counter from "./components/Counter";
import NumberProvider from "./components/NumberProvider";
import NumberContext from "./context/NumberContext";

const data = ["A", "B", "C"];

export default function App() {
  return (
    <NumberProvider>
      <div className="App">
        <NumberContext.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number} </h2>
              <button onClick={updateNumber}>Update</button>
            </div>
          )}
        </NumberContext.Consumer>

        {/* <List data={data} render={item => <div>{`OK, ${item}`}</div>} />
      <Counter>{value => <h1> {value} </h1>}</Counter> */}
      </div>
    </NumberProvider>
  );
}
