import { useContext, useRef } from "react";
import classes from "./MedicineForm.module.css";
import CartContext from "../../store/cart-context";

const MedicineForm = () => {
  const name = useRef(null);
  const description = useRef(null);
  const price = useRef(null);
  const L = useRef(null);
  const M = useRef(null);
  const S = useRef(null);

  const cartCtx = useContext(CartContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      name.current.value &&
      description.current.value &&
      price.current.value &&
      L.current.value &&
      M.current.value &&
      S.current.value
    ) {
      const item = {
        id: name.current.value,
        name: name.current.value,
        description: description.current.value,
        price: price.current.value,
        L: L.current.value,
        M: M.current.value,
        S: S.current.value,
      };

      cartCtx.toAddNewItem(item);
    } else {
      alert("Please Fill all the forms");
    }
    L.current.value = "";
    M.current.value = "";
    S.current.value = "";
  };
  return (
    <div className={classes.formDiv}>
      <form onSubmit={handleFormSubmit}>
        <div className={classes.form}>
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
        </div>

        <div>
          <label htmlFor="quantity">Quantity</label>
          <div className={classes.quantity + " " + classes.form}>
            <div>
              <label htmlFor="l">L</label>
              <input id="l" type="number" ref={L} />
            </div>
            <div>
              <label htmlFor="m">M</label>
              <input id="m" type="number" ref={M} />
            </div>
            <div>
              <label htmlFor="s">S</label>
              <input id="s" type="number" ref={S} />
            </div>
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
