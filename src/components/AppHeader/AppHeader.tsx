import React from 'react';

import styles from './appheader.module.css';

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader: React.FC = () => {
  return (
    <header className={`pt-3 pb-3 ${styles.header}`}>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className='pl-4 pr-4 pt-5 pb-5 mr-5'>
            <a className={styles.link} href='/'>
              <BurgerIcon type='primary' />
              <p className='text text_type_main-default ml-2'>Конструктор</p>
            </a>
          </li>
          <li className='pl-4 pr-4 pt-5 pb-5'>
            <a className={styles.link} href='/'>
              <ListIcon type='secondary' />
              <p className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
            </a>
          </li>
        </ul>
        <div className={styles.wrapperLogo}>
          <Logo />
        </div>
        <ul className={styles.list}>
          <li className='pl-4 pr-4 pt-5 pb-5'>
            <a className={styles.link} href='/'>
              <ProfileIcon type='secondary' />
              <p className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
