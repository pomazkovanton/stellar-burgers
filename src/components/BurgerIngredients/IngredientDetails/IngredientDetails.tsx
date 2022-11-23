import React from 'react';
import { IngredientType } from '../../../types/Ingredient';

import styles from './ingredientdetails.module.css';

interface IngredientDetailsProps {
  ingredient: IngredientType | null;
}

const IngredientDetails: React.FC<IngredientDetailsProps> = ({ ingredient }) => {
  if (ingredient === null) return null;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
      <h3 className='text text_type_main-medium mt-4'>{ingredient.name}</h3>
      <ul className={styles.list}>
        <li>
          <h4 className='text text_type_main-small text_color_inactive'>Калории,ккал</h4>
          <p className='text text_type_main-small text_color_inactive'>{ingredient.calories}</p>
        </li>
        <li>
          <h4 className='text text_type_main-small text_color_inactive'>Белки, г</h4>
          <p className='text text_type_main-small text_color_inactive'>{ingredient.proteins}</p>
        </li>
        <li>
          <h4 className='text text_type_main-small text_color_inactive'>Жиры, г</h4>
          <p className='text text_type_main-small text_color_inactive'>{ingredient.fat}</p>
        </li>
        <li>
          <h4 className='text text_type_main-small text_color_inactive'>Углеводы, г</h4>
          <p className='text text_type_main-small text_color_inactive'>
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
