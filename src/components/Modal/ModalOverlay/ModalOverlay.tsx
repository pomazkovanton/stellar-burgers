import React from 'react';

import styles from './modaloverlay.module.css';

interface IModalOverlayProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay: React.FC<IModalOverlayProps> = ({ children, isActive, onClose }) => {
  return (
    <div
      className={isActive ? [styles.overlay, styles.show].join(' ') : styles.overlay}
      onMouseDown={onClose}
      role='presentation'
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
