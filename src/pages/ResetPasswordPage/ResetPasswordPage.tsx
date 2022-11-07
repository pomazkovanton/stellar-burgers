import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './resetpasswordpage.module.css';

const ResetPasswordPage = () => {
  const [form, setValue] = useState({ password: '', code: '' });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handlerResetPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
      <form className={styles.form}>
        <Input
          onChange={onChange}
          value={form.password}
          name='password'
          placeholder={'Введите новый пароль'}
          type='password'
        />
        <Input
          onChange={onChange}
          value={form.code}
          name='code'
          placeholder={'Введите код из письма'}
          type='text'
        />
        <Button type='primary' size='medium' htmlType='submit' onClick={handlerResetPassword}>
          Сохранить
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

export default ResetPasswordPage;
