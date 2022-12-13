import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Loader from '../../components/Loader/Loader';

import {
  lOADING_DATA,
  PROFILE_ORDERS_ROUTE,
  PROFILE_ROUTE,
  REJECTED_DATA,
  RESOLVED_DATA,
} from '../../utils/constans';
import { logout, updateUser } from '../../store/slices/authSlice';
import { getCookie } from '../../utils/utils';
import { useForm, useAppDispatch, useAppSelector } from '../../utils/hooks';

import styles from './profilepage.module.css';

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const { user, token, responseStatus, responseError } = useAppSelector((state) => state.auth);
  const { values, handleChange, setValues } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  const refreshToken = getCookie('token');
  const accessToken = { authorization: `Bearer ${token}` };

  const inputNameRef = React.useRef<HTMLInputElement>(null);
  const inputEmailRef = React.useRef<HTMLInputElement>(null);
  const inputPasswordRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setValues({
        name: user.name,
        email: user.email,
        password: '',
      });
    }
  }, [user, setValues]);

  const setDisabledForm = () => {
    const inputs = [inputNameRef.current, inputEmailRef.current, inputPasswordRef.current];
    inputs.map((input) => {
      if (input !== null && input.disabled === false) {
        input.classList.add('input__textfield-disabled');
        input.disabled = true;
      }
    });
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateUser({ user: values, token: accessToken }));
    setDisabledForm();
    setIsVisible(false);
  };

  const handlerLogout = () => {
    if (refreshToken) dispatch(logout({ token: refreshToken }));
  };

  const handlerIconClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    const input = inputRef.current;
    if (input !== null) {
      input.classList.remove('input__textfield-disabled');
      input.focus();
      input.disabled = false;
    }
    setIsVisible(true);
  };

  const handlerCancelBtn = () => {
    setDisabledForm();
    if (user !== null) setValues({ name: user.name, email: user.email, password: '' });
    setIsVisible(false);
  };

  return (
    <>
      {responseStatus === lOADING_DATA && <Loader />}
      {responseStatus === REJECTED_DATA && <h2>Ошибка загрузки данных: {responseError}</h2>}
      {responseStatus === RESOLVED_DATA && (
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
        </div>
      )}
    </>
  );
};

export default ProfilePage;
