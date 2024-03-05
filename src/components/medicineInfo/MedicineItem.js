import { useContext } from "react";
import classes from "./MedicineItem.module.css";
import CartContext from "../../store/cart-context";

const MedicineItem = (props) => {
  const cartCtx = useContext(CartContext);
  const handleAddLButton = () => {
    cartCtx.toAddLToCart(props.id);
  };
  const handleAddMButton = () => {
    cartCtx.toAddMToCart(props.id);
  };
  const handleAddSButton = () => {
    cartCtx.toAddSToCart(props.id);
  };
  return (
    <li className={classes.item}>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>

      <button onClick={handleAddLButton}>Add To Cart L ({props.L})</button>
      <button onClick={handleAddMButton}>Add To Cart M ({props.M})</button>
      <button onClick={handleAddSButton}>Add To Cart S ({props.S})</button>
    </li>
  );
};

export default MedicineItem;
