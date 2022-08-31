import React, { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { IngredientType } from '../../types/Ingredient';

import data from '../../utils/data.json';
import styles from './app.module.css';

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState(data);
  const [burger, setBurger] = useState<IngredientType[]>([]);

  const addToBurger = (ingredient: IngredientType) => {
    burger.includes(ingredient)
      ? setBurger(burger.filter((el) => el !== ingredient))
      : setBurger([...burger, ingredient]);
  };

  return (
    <>
      <AppHeader />
      <main className={styles.container}>
        <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
        <div className={styles.wrapper}>
          <BurgerIngredients ingredients={ingredients} addToBurger={addToBurger} />
          <BurgerConstructor burger={burger} />
        </div>
      </main>
    </>
  );
};

export default App;
