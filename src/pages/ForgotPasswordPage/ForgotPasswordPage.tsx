import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './forgotpasswordpage.module.css';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
      <form className={styles.form}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name='email'
          placeholder={'Укажите e-mail'}
          type='email'
        />
        <Button type='primary' size='medium' htmlType='submit'>
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.footer}>
        <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
        <Link to='/stellar-burgers/login'>
          <Button type='secondary' htmlType='button'>
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
