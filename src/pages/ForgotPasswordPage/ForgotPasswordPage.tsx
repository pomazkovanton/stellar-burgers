import React from 'react';

import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';

import { useForm, useAppSelector } from '../../utils/hooks';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { getCodeInEmail } from '../../utils/auth-api';
import { HOME_ROUTE, RESET_PASSWORD_ROUTE } from '../../utils/constans';

import styles from './forgotpasswordpage.module.css';

const ForgotPasswordPage: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { values, handleChange } = useForm({ email: '' });
  const history = useHistory();
  const location = useLocation();

  if (isAuth) {
    return <Redirect to={HOME_ROUTE} />;
  }

  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await getCodeInEmail(values);
      if (data.success) {
        history.push(RESET_PASSWORD_ROUTE, { from: location });
      }
    } catch (error) {
      alert('Ошибка: Не получилось восстановить пароль!' + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Input
          onChange={handleChange}
          value={values.email}
          name='email'
          placeholder={'Укажите e-mail'}
          type='email'
        />
        <Button type='primary' size='medium' htmlType='submit'>
          Восстановить
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
