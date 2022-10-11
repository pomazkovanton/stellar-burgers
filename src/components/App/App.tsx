import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import { fetchIngredients } from '../../store/ingredientsSlice';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';

import styles from './app.module.css';

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
      <DndProvider backend={HTML5Backend}>
        <main className={styles.container}>
          <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
          <div className={styles.wrapper}>
            {ingredientsStatus === lOADING_DATA && <h2>Загрузка данных...</h2>}
            {ingredientsStatus === REJECTED_DATA && (
              <h2>Ошибка загрузки данных: {ingredientsError}</h2>
            )}
            {ingredientsStatus === RESOLVED_DATA && <BurgerIngredients ingredients={ingredients} />}
            <BurgerConstructor />
          </div>
        </main>
      </DndProvider>
    </>
  );
};

export default App;
