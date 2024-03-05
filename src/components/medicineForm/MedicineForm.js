import { useContext, useRef } from "react";
import classes from "./MedicineForm.module.css";
import CartContext from "../../store/cart-context";

const MedicineForm = () => {
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const L = useRef();
  const M = useRef();
  const S = useRef();

  const cartCtx = useContext(CartContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: name.current.value,
      name: name.current.value,
      description: description.current.value,
      price: price.current.value,
      L: L.current.value,
      M: M.current.value,
      S: S.current.value,
    };
    console.log(item);
    cartCtx.toAddNewItem(item);
  };
  return (
    <div className={classes.formDiv}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={name} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" ref={description} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input id="price" type="number" ref={price} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <div className={classes.quantity}>
            <label htmlFor="l">L</label>
            <input id="l" type="number" ref={L} />
            <label htmlFor="m">M</label>
            <input id="m" type="number" ref={M} />
            <label htmlFor="s">S</label>
            <input id="s" type="number" ref={S} />
          </div>
        </div>
        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MedicineForm;
