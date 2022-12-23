import React from "react";
import ReactDOM from "react-dom";

const ModalContent: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
}> = ({ children, onClose }) => {
  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed bg-slate-600/[.2] w-full h-full z-10 grid place-items-center px-2"
      onClick={closeModalHandler}
    >
      {children}
    </div>
  );
};

const modalElement = document.getElementById("modal")! as HTMLElement;

const Modal: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
}> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <ModalContent children={children} onClose={onClose} />,
    modalElement
  );
};

export default Modal;
