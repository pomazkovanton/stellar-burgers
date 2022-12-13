import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { register } from '../../store/slices/authSlice';
import { useForm, useAppDispatch, useAppSelector } from '../../utils/hooks';
import { HOME_ROUTE } from '../../utils/constans';

import styles from './registerpage.module.css';

const RegisterPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { values, handleChange } = useForm({ name: '', email: '', password: '' });
  const { isAuth } = useAppSelector((state) => state.auth);

  if (isAuth) {
    return <Redirect to={HOME_ROUTE} />;
  }

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(register(values));
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Регистрация</h2>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleChange}
          value={values.name}
          name={'name'}
          error={false}
          size={'default'}
        />
        <EmailInput onChange={handleChange} value={values.email} name='email' />
        <PasswordInput onChange={handleChange} value={values.password} name='password' />
        <Button type='primary' size='medium' htmlType='submit'>
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.register}>
        <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</p>
        <Link to='/stellar-burgers/login'>
          <Button type='secondary' htmlType='button'>
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
