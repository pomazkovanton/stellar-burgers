import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import styles from './app.module.css';
import { IngredientType } from '../../types/Ingredient';
import { BurgerConstructorContext } from 'src/services/burgerConstructorContext';
import { fetchIngredients } from '../../store/ingredientsSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsStatus, ingredientsError } = useSelector(
    (store) => store.ingredients,
  );
  const [burger, setBurger] = useState<IngredientType[]>([]);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const addToBurger = (ingredient: IngredientType) => {
    if (burger.includes(ingredient)) {
      setBurger(burger.filter((el) => el !== ingredient));
    } else if (ingredient.type === 'bun') {
      setBurger([...burger.filter((el) => el.type !== 'bun'), ingredient]);
    } else {
      setBurger([...burger, ingredient]);
    }
  };

  return (
    <>
      <AppHeader />
      <main className={styles.container}>
        <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
        <div className={styles.wrapper}>
          {ingredientsStatus === 'loading' && <h2>Загрузка данных...</h2>}
          {ingredientsStatus === 'rejected' && <h2>Ошибка загрузки данных: {ingredientsError}</h2>}
          {ingredientsStatus === 'resolved' && (
            <BurgerIngredients
              ingredients={ingredients}
              addToBurger={addToBurger}
              burger={burger}
            />
          )}

          <BurgerConstructorContext.Provider value={burger}>
            <BurgerConstructor />
          </BurgerConstructorContext.Provider>
        </div>
      </main>
    </>
  );
};

export default App;
