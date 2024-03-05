import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const handleCloseButton = () => {
    props.onHideCart();
  };

  const above = (
    <div className={classes.upperList}>
      <p>Name</p>
      <p>Price</p>
      <p>L</p>
      <p>M</p>
      <p>S</p>
    </div>
  );
  const tShirtItems = (
    <ul>
      {cartCtx.cartItems.map((item) => {
        return (
          <li className={classes.list}>
            <p>{item.name}</p>

            <p>{item.price}</p>
            <p>{item.L}</p>
            <p>{item.M}</p>
            <p>{item.S}</p>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {above}
      {tShirtItems}
      <div className={classes.totalAmount}>
        <label>Total Amount: {cartCtx.totalAmount}</label>
        <button>Order</button>
        <button onClick={handleCloseButton}>Close</button>
      </div>
    </Modal>
  );
};

export default CartModal;
