import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";

import { CartProvider } from "./contexts/Cart";

const Index = () => <h2>Home</h2>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />

          <Route path="/" exact component={Index} />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}
