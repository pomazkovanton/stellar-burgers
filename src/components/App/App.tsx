import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import styles from './app.module.css';
import { fetchIngredients } from '../../store/ingredientsSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsStatus, ingredientsError } = useSelector(
    (store) => store.ingredients,
  );

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <main className={styles.container}>
        <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
        <div className={styles.wrapper}>
          {ingredientsStatus === 'loading' && <h2>Загрузка данных...</h2>}
          {ingredientsStatus === 'rejected' && <h2>Ошибка загрузки данных: {ingredientsError}</h2>}
          {ingredientsStatus === 'resolved' && <BurgerIngredients ingredients={ingredients} />}
          <BurgerConstructor />
        </div>
      </main>
    </>
  );
};

export default App;
