import React, { useState } from "react";
import Header from "./components/Header";
import MedicineInfo from "./components/medicineInfo/MedicineInfo";
import CartModal from "./components/Cart/CartModal";
import CartProvider from "./store/CartProvider";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const removeCartModal = () => {
    setShowCartModal(false);
  };

  const addCartModal = () => {
    setShowCartModal(true);
  };
  return (
    <CartProvider>
      {showCartModal && <CartModal onHideCart={removeCartModal} />}
      <Header onShowCart={addCartModal} />
      <MedicineInfo />
    </CartProvider>
  );
};

export default App;
