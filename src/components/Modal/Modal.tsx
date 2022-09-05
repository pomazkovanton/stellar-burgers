import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';

interface IModalProps {
  title?: string;
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const modalRoot = document.getElementById('modals') as HTMLElement;

const Modal: React.FC<IModalProps> = ({ active, setActive, children, title }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, []);

  const closePopup = () => {
    setActive(false);
  };

  const handleEscClose = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay isActive={active} onClose={closePopup}>
      <div
        className={active ? [styles.modal, styles.show].join(' ') : styles.modal}
        onMouseDown={(e) => e.stopPropagation()}
        role='presentation'
      >
        <div className={styles.header}>
          <h2 className='text text_type_main-large'>{title}</h2>
          <button onMouseDown={closePopup} className={styles.button}>
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
