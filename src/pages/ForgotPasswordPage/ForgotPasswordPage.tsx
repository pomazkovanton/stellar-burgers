import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './forgotpasswordpage.module.css';
import { getCodeInEmail } from '../../utils/auth-api';
import { RESET_PASSWORD_ROUTE } from '../../utils/constans';

const ForgotPasswordPage: React.FC = () => {
  const [form, setValue] = useState({ email: '' });
  const history = useHistory();

  const onChange = (e) => {
    setValue({ email: e.target.value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getCodeInEmail(form);
      if (data.success) {
        history.push(RESET_PASSWORD_ROUTE);
      }
    } catch (error) {
      alert('Ошибка: Не получилось востановить пароль!' + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
      <form className={styles.form}>
        <Input
          onChange={onChange}
          value={form.email}
          name='email'
          placeholder={'Укажите e-mail'}
          type='email'
        />
        <Button type='primary' size='medium' htmlType='submit' onClick={handlerSubmit}>
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
