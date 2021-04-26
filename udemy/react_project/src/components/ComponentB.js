import React, { useContext } from "react";

import ComponentC from "./ComponentC";
import { NameContext, ColorContext } from "../App";
const ComponentB = () => {
  const user = useContext(NameContext);
  const color = useContext(ColorContext);

  return (
    <div>
      <h2>B and {`${user} + ${color}`}</h2>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
