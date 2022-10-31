import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';

import { fetchIngredients } from '../../store/ingredientsSlice';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';
import styles from './homepage.module.css';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsStatus, ingredientsError } = useSelector(
    (store) => store.ingredients,
  );

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
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
  );
};

export default HomePage;
