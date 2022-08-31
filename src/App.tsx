import React, { useState } from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import { IngredientType } from './types/Ingredient';

import data from './utils/data.json';

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
      <main className='container'>
        <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
        <div className='wrapper'>
          <BurgerIngredients ingredients={ingredients} addToBurger={addToBurger} />
          <BurgerConstructor burger={burger} />
        </div>
      </main>
    </>
  );
};

export default App;
