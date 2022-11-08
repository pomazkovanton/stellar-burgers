import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './loginpage.module.css';
import { login } from '../../store/authSlice';
import { REJECTED_DATA } from '../../utils/constans';

const LoginPage: React.FC = () => {
  const [form, setValue] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handlerLogin = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Вход</h2>
      <form className={styles.form}>
        <EmailInput onChange={onChange} value={form.email} name='email' />
        <PasswordInput onChange={onChange} value={form.password} name='password' />
        <Button type='primary' size='medium' htmlType='submit' onClick={handlerLogin}>
          Войти
        </Button>
      </form>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
            Вы — новый пользователь?
          </p>
          <Link to='/stellar-burgers/register'>
            <Button type='secondary' htmlType='button'>
              Зарегистрироваться
            </Button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <p className='text text_type_main-default text_color_inactive'>Забыли пароль?</p>
          <Link to='/stellar-burgers/forgot-password'>
            <Button type='secondary' htmlType='button'>
              Восстановить пароль
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginPage;
