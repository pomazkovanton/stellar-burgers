import React, { useEffect } from 'react';

import styles from './modal.module.css';

interface IModalProps {
  title?: string;
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ active, setActive, children, title }) => {
  const handleEscClose = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, []);

  return (
    <div
      className={active ? [styles.overlay, styles.show].join(' ') : styles.overlay}
      onMouseDown={() => setActive(false)}
      role='presentation'
    >
      <div
        className={active ? [styles.modal, styles.show].join(' ') : styles.modal}
        onMouseDown={(e) => e.stopPropagation()}
        role='presentation'
      >
        <div className={styles.header}>
          <h2 className='text text_type_main-large'>{title}</h2>
          <button onMouseDown={() => setActive(false)} className={styles.button}></button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
