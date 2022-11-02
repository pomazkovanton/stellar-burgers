import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navitem.module.css';

interface INavItemProps {
  url: string;
  children: React.ReactNode;
}

const NavItem: React.FC<INavItemProps> = ({ children, url }) => {
  return (
    <li className='pl-4 pr-4 pt-5 pb-5'>
      <NavLink exact to={{ pathname: url }} className={styles.link} activeClassName={styles.active}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
