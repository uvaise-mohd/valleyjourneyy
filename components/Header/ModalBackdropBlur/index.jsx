import React from "react";

const ModalBackdropBlur = ({ isOpen }) => {
  return isOpen ? (
    <div className="modal-backdrop-blur"></div>
  ) : null;
};

export default ModalBackdropBlur;
