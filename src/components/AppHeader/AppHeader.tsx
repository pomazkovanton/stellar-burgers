import React from 'react';

import styles from './appheader.module.css';

import { Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NavItem from './NavItem/NavItem';
import MainNav from './MainNav/MainNav';

const AppHeader: React.FC = () => {
  return (
    <header className={`pt-3 pb-3 ${styles.header}`}>
      <div className={styles.content}>
        <MainNav />
        <div className={styles.wrapper}>
          <Logo />
        </div>
        <ul className={styles.list}>
          <NavItem url='/stellar-burgers/profile'>
            <ProfileIcon type='secondary' />
            <p className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
          </NavItem>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
