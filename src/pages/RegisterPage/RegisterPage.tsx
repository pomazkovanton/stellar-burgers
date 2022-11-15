import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './registerpage.module.css';
import { register } from '../../store/authSlice';
import useForm from '../../hooks/useForm';

const RegisterPage: React.FC = () => {
  const { values, handleChange } = useForm({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handlerRegister = (e) => {
    e.preventDefault();
    dispatch(register(values));
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Регистрация</h2>
      <form className={styles.form}>
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
        <Button type='primary' size='medium' htmlType='submit' onClick={handlerRegister}>
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
