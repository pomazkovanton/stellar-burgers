import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profilepage.module.css';
import { PROFILE_ROUTE, PROFILE_ROUTE_ORDERS } from 'src/utils/constans';
import { logout } from '../../store/authSlice';
import { getCookie } from '../../utils/utils';

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const [form, setValue] = useState({ name: user.name, email: user.email, password: '' });
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const refreshToken = getCookie('token');
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);

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

  const onIconClick = (inputRef) => {
    const input = inputRef.current;
    input.classList.remove('input__textfield-disabled');
    input.focus();
    input.disabled = false;
    setIsVisible(true);
  };

  const handlerCancelBtn = () => {
    const inputs = [inputNameRef.current, inputEmailRef.current, inputPasswordRef.current];
    inputs.map((input) => {
      if (input.disabled === false) {
        input.classList.add('input__textfield-disabled');
        input.disabled = true;
      }
    });
    setValue({ name: user.name, email: user.email, password: '' });
    setIsVisible(false);
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
          ref={inputNameRef}
          onIconClick={() => onIconClick(inputNameRef)}
          disabled
        />
        <Input
          onChange={onChange}
          value={form.email}
          name='email'
          placeholder={'Логин'}
          type='email'
          icon={'EditIcon'}
          ref={inputEmailRef}
          onIconClick={() => onIconClick(inputEmailRef)}
          disabled
        />
        <Input
          onChange={onChange}
          value={form.password}
          name='password'
          placeholder={'Пароль'}
          type='password'
          icon={'EditIcon'}
          ref={inputPasswordRef}
          onIconClick={() => onIconClick(inputPasswordRef)}
          disabled
        />
        {isVisible && (
          <div className={styles.buttons}>
            <Button type='secondary' size='medium' onClick={handlerCancelBtn}>
              Отмена
            </Button>
            <Button type='primary' size='medium' extraClass='ml-5'>
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
