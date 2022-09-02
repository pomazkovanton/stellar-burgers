import React from 'react';

import styles from './navitem.module.css';

interface INavItemProps {
  url: string;
  children: React.ReactNode;
}

const NavItem: React.FC<INavItemProps> = ({ children, url }) => {
  return (
    <li className='pl-4 pr-4 pt-5 pb-5'>
      <a className={styles.link} href={url}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
