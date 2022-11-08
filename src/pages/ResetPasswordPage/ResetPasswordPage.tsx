import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { getNewPassword } from '../../utils/auth-api';
import { LOGIN_ROUTE } from '../../utils/constans';

import styles from './resetpasswordpage.module.css';

const ResetPasswordPage = () => {
  const [form, setValue] = useState({ password: '', token: '' });
  const history = useHistory();

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handlerResetPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getNewPassword(form);
      if (data.success) {
        alert('Пароль успешно изменен на новый!');
        history.push(LOGIN_ROUTE);
      }
    } catch (error) {
      alert('Ошибка: Не получилось сбросить пароль!' + error.message);
    }
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
          value={form.token}
          name='token'
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
