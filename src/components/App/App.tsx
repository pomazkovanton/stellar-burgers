import React, { useEffect, useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import styles from './app.module.css';
import { IngredientType } from '../../types/Ingredient';
import { BurgerConstructorContext } from 'src/services/burgerConstructorContext';
import { getIngredients } from 'src/utils/burger-api';

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);
  const [burger, setBurger] = useState<IngredientType[]>([]);
  const [isLoadingIngredients, setIsLoadingIngredients] = useState(false);

  useEffect(() => {
    fetchIngredients();
  }, []);

  const addToBurger = (ingredient: IngredientType) => {
    if (burger.includes(ingredient)) {
      setBurger(burger.filter((el) => el !== ingredient));
    } else if (ingredient.type === 'bun') {
      setBurger([...burger.filter((el) => el.type !== 'bun'), ingredient]);
    } else {
      setBurger([...burger, ingredient]);
    }
  };

  const fetchIngredients = async () => {
    setIsLoadingIngredients(true);
    try {
      const { data } = await getIngredients();
      setIngredients(data.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoadingIngredients(false);
    }
  };

  return (
    <>
      <AppHeader />
      <main className={styles.container}>
        <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
        <div className={styles.wrapper}>
          {isLoadingIngredients ? (
            <h2>Загрузка данных...</h2>
          ) : (
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
