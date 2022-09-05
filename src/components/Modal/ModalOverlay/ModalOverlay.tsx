import React from 'react';

import styles from './modaloverlay.module.css';

interface IModalOverlayProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const ModalOverlay: React.FC<IModalOverlayProps> = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? [styles.overlay, styles.show].join(' ') : styles.overlay}
      onMouseDown={() => setActive(false)}
      role='presentation'
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
