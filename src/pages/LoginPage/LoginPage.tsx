import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './loginpage.module.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Вход</h2>
      <form className={styles.form}>
        <EmailInput onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name='password'
        />
        <Button type='primary' size='medium' htmlType='submit'>
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
