import { useContext, useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  // const itemCount = cartItems.reduce((accumulator, currentElement) => {
  //   return accumulator + currentElement.quantity;
  // }, 0);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count" onClick={toggleIsCartOpen}>
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
