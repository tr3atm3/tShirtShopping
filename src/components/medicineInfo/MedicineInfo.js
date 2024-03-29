import { useContext } from "react";
import Card from "../../UI/Card";
import classes from "./MedicineInfo.module.css";
import MedicineItem from "./MedicineItem";
import CartContext from "../../store/cart-context";

const MedicineInfo = () => {
  const cartCtx = useContext(CartContext);

  const medicineList = (
    <ul className={classes.list}>
      {cartCtx.items.map((item) => (
        <MedicineItem
          key={item.name}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          L={item.L}
          M={item.M}
          S={item.S}
        />
      ))}
    </ul>
  );
  return (
    <Card>
      <div className={classes.about}>
        <div className={classes.over}>
          <p>Name</p>
          <p>Description</p>
          <p>Price</p>
        </div>
        <div>
          <p>Available Qty</p>
        </div>
      </div>
      {medicineList}
    </Card>
  );
};

export default MedicineInfo;
