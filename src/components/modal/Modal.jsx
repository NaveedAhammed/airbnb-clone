import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";

import styles from "./modal.module.css";
import { RxCross2 } from "react-icons/rx";

function Modal({ isOpen, onClose, title, body }) {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(
    function () {
      setShowModal(isOpen);
    },
    [isOpen]
  );

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div
        className={styles.container}
        style={{
          transform: showModal
            ? "translate(-50%,-50%)"
            : "translate(-50%,100%)",
          opacity: showModal ? "100" : "0",
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <RxCross2 onClick={handleClose} className={styles.icon} />
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.content}>{body}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
