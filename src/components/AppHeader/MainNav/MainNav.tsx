import React from 'react';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import NavItem from '../NavItem/NavItem';

import { FEED_ROUTE, HOME_ROUTE } from '../../../utils/constans';

import styles from './mainnav.module.css';

const MainNav: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <NavItem url={HOME_ROUTE}>
          <BurgerIcon type='secondary' />
          <p className='text text_type_main-default text_color_inactive ml-2'>Конструктор</p>
        </NavItem>
        <NavItem url={FEED_ROUTE}>
          <ListIcon type='secondary' />
          <p className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
        </NavItem>
      </ul>
    </nav>
  );
};

export default MainNav;
