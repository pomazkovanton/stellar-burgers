import React from 'react';
import { IngredientType } from '~/types/Ingredient';
import Ingredient from '../Ingredient/Ingredient';

import styles from './ingredientlist.module.css';

interface IngredientListProps {
  type: string;
  title: string;
  ingredients: IngredientType[];
  addToBurger: (ingredient: IngredientType) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({
  ingredients,
  title,
  type,
  addToBurger,
}) => {
  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className={styles.list}>
        {ingredients.map((ingredient) =>
          ingredient.type === type ? (
            <Ingredient key={ingredient._id} ingredient={ingredient} addToBurger={addToBurger} />
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default IngredientList;