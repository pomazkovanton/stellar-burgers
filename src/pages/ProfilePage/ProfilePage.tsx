import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profilepage.module.css';
import { PROFILE_ROUTE, PROFILE_ROUTE_ORDERS } from 'src/utils/constans';
import { logout } from '../../store/authSlice';
import { getCookie } from '../../utils/utils';

const ProfilePage = () => {
  const [form, setValue] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const refreshToken = getCookie('token');

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('work');
  };

  const handlerLogout = () => {
    dispatch(logout({ token: refreshToken }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.nav}>
          <li>
            <NavLink
              exact
              to={PROFILE_ROUTE}
              className={styles.link}
              activeClassName={styles.active}
            >
              <span className='text text_type_main-medium text_color_inactive'>Профиль</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={PROFILE_ROUTE_ORDERS}
              className={styles.link}
              activeClassName={styles.active}
            >
              <span className='text text_type_main-medium text_color_inactive'>
                История заказов
              </span>
            </NavLink>
          </li>
          <li>
            <button className={styles.link} onClick={handlerLogout}>
              <span className='text text_type_main-medium text_color_inactive'>Выход</span>
            </button>
          </li>
        </ul>
        <p className='text text_type_main-default text_color_inactive'>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Input
          onChange={onChange}
          value={form.name}
          name='name'
          placeholder={'Имя'}
          type='text'
          icon={'EditIcon'}
        />
        <Input
          onChange={onChange}
          value={form.email}
          name='email'
          placeholder={'Логин'}
          type='email'
          icon={'EditIcon'}
        />
        <Input
          onChange={onChange}
          value={form.password}
          name='password'
          placeholder={'Пароль'}
          type='password'
          icon={'EditIcon'}
        />
      </form>
    </div>
  );
};

export default ProfilePage;
