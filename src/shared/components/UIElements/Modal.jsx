import React from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
  const {
    children,
    className,
    style,
    header,
    headerClass,
    onSubmit,
    contentClass,
    footerClass,
    footer,
  } = props;

  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()} />
      <div className={`modal__content ${contentClass}`}>{children}</div>
      <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const { show, onCancel } = props;
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props}/>
      </CSSTransition>
    </>
  );
};

export default Modal;
