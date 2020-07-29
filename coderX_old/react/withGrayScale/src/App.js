import React from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ImageGrayScale from "./components/withGrayScale";

export default function App() {
  return (
    <div className="App">
      <ImageGrayScale />
    </div>
  );
}
