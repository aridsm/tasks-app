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
      className="fixed bg-slate-600/[.2] w-full h-full z-30 grid place-items-center px-2 text-slate-600 dark:text-slate-200"
      onClick={closeModalHandler}
    >
      <section className="bg-slate-200 max-w-lg w-full rounded-lg p-5 flex flex-col justify-start dark:bg-slate-900">
        {children}
      </section>
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
