import React from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({ content: { header, text, actions }, close }) => {
  return (
    <>
      <div className={`modal`}>
        <div className="modal__header">
          <h2 className="modal__header__title">{header}</h2>
          <button className="modal__header__btn" onClick={close}>
            &times;
          </button>
        </div>
        <div className="modal__content">
          <p className="modal__content__text">{text}</p>
          {actions}
        </div>
      </div>
      <div className="backdrop" onClick={close} />
    </>
  );
};

Modal.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    actions: PropTypes.element.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
