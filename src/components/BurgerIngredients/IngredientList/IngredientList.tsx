import React from 'react';

import Ingredient from '../Ingredient/Ingredient';

import { TIngredient } from '../../../utils/types/main';

import styles from './ingredientlist.module.css';

interface IngredientListProps {
  type: string;
  title: string;
  ingredients: TIngredient[];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, title, type }) => {
  return (
    <div className={styles.container} id={type}>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className={styles.list}>
        {ingredients.map((ingredient) =>
          ingredient.type === type ? (
            <Ingredient key={ingredient._id} ingredient={ingredient} />
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default IngredientList;
