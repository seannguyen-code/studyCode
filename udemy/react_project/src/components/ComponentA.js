import React from "react";

import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div>
      <h2>A</h2>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
