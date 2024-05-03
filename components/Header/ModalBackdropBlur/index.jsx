import React from "react";

const ModalBackdropBlur = ({ isOpen }) => {
  return isOpen ? (
    <div className="modal-backdrop-blur"></div>
  ) : null;
};

export default ModalBackdropBlur;


// import React from "react";
// import styles from "./ModalBackdropBlur.module.css";

// const ModalBackdropBlur = ({ isOpen }) => {
//   return <div className={`${styles.backdrop} ${isOpen ? styles.visible : ""}`} />;
// };

// export default ModalBackdropBlur;
