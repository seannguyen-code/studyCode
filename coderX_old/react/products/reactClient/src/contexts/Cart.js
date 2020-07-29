import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };

    this.addTocart = this.addTocart.bind(this);
  }

  addTocart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
