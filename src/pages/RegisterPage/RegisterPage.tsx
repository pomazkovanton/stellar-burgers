import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './registerpage.module.css';
import { registerUser } from '../../store/userSlice';

const RegisterPage: React.FC = () => {
  const [form, setValue] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handlerRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Регистрация</h2>
      <form className={styles.form}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={onChange}
          value={form.name}
          name={'name'}
          error={false}
          size={'default'}
        />
        <EmailInput onChange={onChange} value={form.email} name='email' />
        <PasswordInput onChange={onChange} value={form.password} name='password' />
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
