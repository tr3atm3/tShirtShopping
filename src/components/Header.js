import MedicineForm from "./medicineForm/MedicineForm";

import classes from "./Header.module.css";
import CartButton from "./Cart/Cart";
const Header = (props) => {
  return (
    <div className={classes.header}>
      <MedicineForm />
      <CartButton onClick={props.onShowCart} />
    </div>
  );
};

export default Header;
