import classes from "./Cart.module.css";

const CartButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.cart}>
      Cart
    </button>
  );
};

export default CartButton;
