import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profilepage.module.css';
import {
  lOADING_DATA,
  PROFILE_ORDERS_ROUTE,
  PROFILE_ROUTE,
  REJECTED_DATA,
  RESOLVED_DATA,
} from 'src/utils/constans';
import { logout, updateUser } from '../../store/slices/authSlice';
import { getCookie } from '../../utils/utils';
import useForm from '../../hooks/useForm';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { user, token, getDataUserStatus, getDataUserError } = useSelector((state) => state.auth);

  const { values, handleChange, setValues } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  const refreshToken = getCookie('token');
  const accessToken = { authorization: `Bearer ${token}` };

  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);

  useEffect(() => {
    if (user) {
      setValues({
        name: user.name,
        email: user.email,
        password: '',
      });
    }
  }, [user]);

  const setDisabledForm = () => {
    const inputs = [inputNameRef.current, inputEmailRef.current, inputPasswordRef.current];
    inputs.map((input) => {
      if (input.disabled === false) {
        input.classList.add('input__textfield-disabled');
        input.disabled = true;
      }
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ user: values, token: accessToken }));
    setDisabledForm();
    setIsVisible(false);
  };

  const handlerLogout = () => {
    dispatch(logout({ token: refreshToken }));
  };

  const handlerIconClick = (inputRef) => {
    const input = inputRef.current;
    input.classList.remove('input__textfield-disabled');
    input.focus();
    input.disabled = false;
    setIsVisible(true);
  };

  const handlerCancelBtn = () => {
    setDisabledForm();
    setValues({ name: user.name, email: user.email, password: '' });
    setIsVisible(false);
  };

  return (
    <div className={styles.container}>
      {getDataUserStatus === lOADING_DATA && <h2>Загрузка данных...</h2>}
      {getDataUserStatus === REJECTED_DATA && <h2>Ошибка загрузки данных: {getDataUserError}</h2>}
      {getDataUserStatus === RESOLVED_DATA && (
        <>
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
                  to={PROFILE_ORDERS_ROUTE}
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
              onChange={handleChange}
              value={values.name}
              name='name'
              placeholder={'Имя'}
              type='text'
              icon={'EditIcon'}
              ref={inputNameRef}
              onIconClick={() => handlerIconClick(inputNameRef)}
              disabled
            />
            <Input
              onChange={handleChange}
              value={values.email}
              name='email'
              placeholder={'Логин'}
              type='email'
              icon={'EditIcon'}
              ref={inputEmailRef}
              onIconClick={() => handlerIconClick(inputEmailRef)}
              disabled
            />
            <Input
              onChange={handleChange}
              value={values.password}
              name='password'
              placeholder={'Пароль'}
              type='password'
              icon={'EditIcon'}
              ref={inputPasswordRef}
              onIconClick={() => handlerIconClick(inputPasswordRef)}
              disabled
            />
            {isVisible && (
              <div className={styles.buttons}>
                <Button type='secondary' size='medium' htmlType='button' onClick={handlerCancelBtn}>
                  Отмена
                </Button>
                <Button type='primary' size='medium' extraClass='ml-5' htmlType='submit'>
                  Сохранить
                </Button>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
