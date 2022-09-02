import React from 'react';

import styles from './mainnav.module.css';

import NavItem from '../NavItem/NavItem';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const MainNav: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <NavItem url='/'>
          <BurgerIcon type='primary' />
          <p className='text text_type_main-default ml-2'>Конструктор</p>
        </NavItem>
        <NavItem url='/'>
          <ListIcon type='secondary' />
          <p className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
        </NavItem>
      </ul>
    </nav>
  );
};

export default MainNav;
