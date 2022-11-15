import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { getNewPassword } from '../../utils/auth-api';
import { LOGIN_ROUTE } from '../../utils/constans';

import styles from './resetpasswordpage.module.css';
import useForm from '../../hooks/useForm';

const ResetPasswordPage = () => {
  const { values, handleChange } = useForm({ password: '', token: '' });
  const history = useHistory();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getNewPassword(values);
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
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Input
          onChange={handleChange}
          value={values.password}
          name='password'
          placeholder={'Введите новый пароль'}
          type='password'
        />
        <Input
          onChange={handleChange}
          value={values.token}
          name='token'
          placeholder={'Введите код из письма'}
          type='text'
        />
        <Button type='primary' size='medium' htmlType='submit'>
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
