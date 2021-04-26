import React, { useContext } from "react";

import { NameContext, ColorContext } from "../App";

const ComponentC = () => {
  const user = useContext(NameContext);
  const color = useContext(ColorContext);
  return (
    <div>
      <h2>C</h2>
      {user}
      <br></br>
      {color}
    </div>
  );
};

export default ComponentC;
