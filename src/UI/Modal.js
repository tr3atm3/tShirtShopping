import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const OverLay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};
const Modal = (props) => {
  const portal = document.getElementById("overlays");
  return (
    <React.Fragment>
      {createPortal(<BackDrop onClick={props.onHideCart} />, portal)}

      {createPortal(<OverLay>{props.children}</OverLay>, portal)}
    </React.Fragment>
  );
};

export default Modal;
