import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './registerpage.module.css';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Регистрация</h2>
      <form className={styles.form}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={'name'}
          error={false}
          size={'default'}
        />
        <EmailInput onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name='password'
        />
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
