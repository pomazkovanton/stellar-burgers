import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import NavItem from './NavItem/NavItem';
import MainNav from './MainNav/MainNav';

import { HOME_ROUTE, PROFILE_ROUTE } from '../../utils/constans';
import { useAppSelector } from '../../utils/hooks';

import styles from './appheader.module.css';

const AppHeader: React.FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.auth);
  return (
    <header className={`pt-3 pb-3 ${styles.header}`}>
      <div className={styles.content}>
        <MainNav />
        <div className={styles.wrapper}>
          <NavLink
            exact
            to={HOME_ROUTE}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            <Logo />
          </NavLink>
        </div>
        <ul className={styles.list}>
          <NavItem url={PROFILE_ROUTE}>
            <ProfileIcon type='secondary' />
            <p className='text text_type_main-default text_color_inactive ml-2'>
              {isAuth && user ? user.name : 'Личный кабинет'}
            </p>
          </NavItem>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
