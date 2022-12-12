import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from './ModalOverlay/ModalOverlay';

import styles from './modal.module.css';
interface IModalProps {
  title?: string;
  isSmallTitle?: boolean;
  isActive: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const modalRoot = document.getElementById('modals') as HTMLElement;

const Modal: React.FC<IModalProps> = ({
  isActive,
  closeModal,
  children,
  title,
  isSmallTitle = false,
}) => {
  useEffect(() => {
    const handleEscClose = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    };
    if (isActive) document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [isActive, closeModal]);

  return ReactDOM.createPortal(
    <ModalOverlay isActive={isActive} onClose={closeModal}>
      <div
        className={isActive ? [styles.modal, styles.show].join(' ') : styles.modal}
        onMouseDown={(e) => e.stopPropagation()}
        role='presentation'
      >
        <div className={styles.header}>
          <h2
            className={!isSmallTitle ? 'text text_type_main-large' : 'text text_type_main-medium'}
          >
            {title}
          </h2>
          <button onMouseDown={closeModal} className={styles.button}>
            <CloseIcon type='primary' />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </ModalOverlay>,
    modalRoot,
  );
};

export default Modal;
