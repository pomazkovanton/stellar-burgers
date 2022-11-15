import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';

import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';
import styles from './homepage.module.css';

const HomePage: React.FC = () => {
  const { ingredients, ingredientsStatus, ingredientsError } = useSelector(
    (store) => store.ingredients,
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
        <div className={styles.wrapper}>
          {ingredientsStatus === lOADING_DATA && <h2>Загрузка данных...</h2>}
          {ingredientsStatus === REJECTED_DATA && (
            <h2>Ошибка загрузки данных: {ingredientsError}</h2>
          )}
          {ingredientsStatus === RESOLVED_DATA && <BurgerIngredients ingredients={ingredients} />}
          <BurgerConstructor />
        </div>
      </div>
    </DndProvider>
  );
};

export default HomePage;
