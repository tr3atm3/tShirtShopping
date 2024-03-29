import { useEffect, useReducer, useState } from "react";
import CartContext from "./cart-context";
import { act } from "react-dom/test-utils";

const defaultState = {
  cartItems: [],
  items: [],
  totalAmount: 0,
};
const functionReducer = (state, action) => {
  if (action.type === "fromCrud") {
    return action;
  }

  if (action.type === "NEWITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updatedItems = [...state.items];
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        L: parseInt(existingItem.L) + parseInt(action.item.L),
        M: parseInt(existingItem.M) + parseInt(action.item.M),
        S: parseInt(existingItem.S) + parseInt(action.item.S),
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push(action.item);
    }
    return {
      cartItems: state.cartItems,
      items: updatedItems,
      totalAmount: state.totalAmount,
    };
  }
  if (action.type === "NEWLCARTITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    if (parseInt(existingItem.L) === 0) {
      alert("Tshirt out of stock");
      return {
        ...state,
      };
    }
    //updating totalAmount
    const newTotalAmount =
      parseInt(state.totalAmount) + parseInt(existingItem.price);

    //updating items array
    const newItem = { ...existingItem, L: parseInt(existingItem.L) - 1 };
    let newItemsArray = [...state.items];
    newItemsArray[existingItemIndex] = newItem;

    //updating cartItems array
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedCartItems = [...state.cartItems];
    let updatedCartItem;
    if (existingCartItem) {
      updatedCartItem = {
        ...existingCartItem,
        L: parseInt(existingCartItem.L) + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      const [newCartItem] = state.items.filter((item) => item.id === action.id);
      updatedCartItem = { ...newCartItem, L: 1, M: 0, S: 0 };
      updatedCartItems.push(updatedCartItem);
    }
    return {
      cartItems: updatedCartItems,
      items: newItemsArray,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "NEWMCARTITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    if (parseInt(existingItem.M) === 0) {
      alert("Tshirt out of stock");
      return {
        ...state,
      };
    }
    //updating totalAmount
    const newTotalAmount =
      parseInt(state.totalAmount) + parseInt(existingItem.price);

    //updating items array
    const newItem = { ...existingItem, M: parseInt(existingItem.M) - 1 };
    let newItemsArray = [...state.items];
    newItemsArray[existingItemIndex] = newItem;

    //updating cartItems array
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedCartItems = [...state.cartItems];
    let updatedCartItem;
    if (existingCartItem) {
      updatedCartItem = {
        ...existingCartItem,
        M: parseInt(existingCartItem.M) + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      const [newCartItem] = state.items.filter((item) => item.id === action.id);
      updatedCartItem = { ...newCartItem, M: 1, L: 0, S: 0 };
      updatedCartItems.push(updatedCartItem);
    }
    return {
      cartItems: updatedCartItems,
      items: newItemsArray,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "NEWSCARTITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    if (parseInt(existingItem.S) === 0) {
      alert("Tshirt out of stock");
      return {
        ...state,
      };
    }
    //updating totalAmount
    const newTotalAmount =
      parseInt(state.totalAmount) + parseInt(existingItem.price);

    //updating items array
    const newItem = { ...existingItem, S: parseInt(existingItem.S) - 1 };
    let newItemsArray = [...state.items];
    newItemsArray[existingItemIndex] = newItem;

    //updating cartItems array
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedCartItems = [...state.cartItems];
    let updatedCartItem;
    if (existingCartItem) {
      updatedCartItem = {
        ...existingCartItem,
        S: parseInt(existingCartItem.S) + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      const [newCartItem] = state.items.filter((item) => item.id === action.id);
      updatedCartItem = { ...newCartItem, S: 1, L: 0, M: 0 };
      updatedCartItems.push(updatedCartItem);
    }
    return {
      cartItems: updatedCartItems,
      items: newItemsArray,
      totalAmount: newTotalAmount,
    };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [allState, dispatchAction] = useReducer(functionReducer, defaultState);
  const [id, setId] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      "https://crudcrud.com/api/4a301c2a335c4252a0df9949d4d4bd62/products/660688821492af03e8f10c05"
    );
    const json = data.json();
    dispatchAction(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateData();
  }, [allState]);
  const updateData = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/4a301c2a335c4252a0df9949d4d4bd62/products/660688821492af03e8f10c05",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allState),
        }
      );

      const responseData = await response.json();
      const updatedData = responseData ? JSON.parse(responseData) : null;
      console.log("Data updated successfully:", updatedData);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const addNewItem = (item) => {
    dispatchAction({
      type: "NEWITEM",
      item: item,
    });
  };

  const addLToCart = (id) => {
    dispatchAction({
      type: "NEWLCARTITEM",
      id: id,
    });
  };
  const addMToCart = (id) => {
    dispatchAction({
      type: "NEWMCARTITEM",
      id: id,
    });
  };
  const addSToCart = (id) => {
    dispatchAction({
      type: "NEWSCARTITEM",
      id: id,
    });
  };

  const contextValue = {
    items: allState.items,
    totalAmount: allState.totalAmount,
    cartItems: allState.cartItems,
    toAddNewItem: addNewItem,

    toAddLToCart: addLToCart,
    toAddMToCart: addMToCart,
    toAddSToCart: addSToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
