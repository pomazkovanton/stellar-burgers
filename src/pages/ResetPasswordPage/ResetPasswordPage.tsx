import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { getNewPassword } from '../../utils/auth-api';
import { FORGOT_PASSWORD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../../utils/constans';
import { useForm, useAppSelector } from '../../utils/hooks';

import styles from './resetpasswordpage.module.css';

interface ILocationState {
  from: {
    pathname: string;
    search: string;
    hash: string;
    state: null;
    key: string;
  };
  state?: object;
}

const ResetPasswordPage: React.FC = () => {
  const location = useLocation<ILocationState>();
  const history = useHistory();

  const { isAuth } = useAppSelector((state) => state.auth);
  const { values, handleChange } = useForm({ password: '', token: '' });

  const PREVIOUS_LOCATION_ROUTE = location.state?.from.pathname;

  if (isAuth) {
    return <Redirect to={HOME_ROUTE} />;
  }

  if (PREVIOUS_LOCATION_ROUTE !== FORGOT_PASSWORD_ROUTE) {
    return <Redirect to={FORGOT_PASSWORD_ROUTE} />;
  }

  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
