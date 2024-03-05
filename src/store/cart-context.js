import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  totalAmount: 0,
  items: [],
  toAddNewItem: (item) => {},

  toAddLToCart: (id) => {},
  toAddMToCart: (id) => {},
  toAddSToCart: (id) => {},
});

export default CartContext;
