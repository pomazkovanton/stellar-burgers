import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import IngredientDetails from '../../components/BurgerIngredients/IngredientDetails/IngredientDetails';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';

import styles from './ingredientpage.module.css';

const IngredientPage = () => {
  const { id } = useParams();
  const { ingredients, ingredientsStatus, ingredientsError } = useSelector(
    (store) => store.ingredients,
  );
  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <div className={styles.container}>
      {ingredientsStatus === lOADING_DATA && (
        <h2 className='text text_type_main-large'>Загрузка данных...</h2>
      )}
      {ingredientsStatus === REJECTED_DATA && (
        <h2 className='text text_type_main-large'>Ошибка загрузки данных: {ingredientsError}</h2>
      )}
      {ingredientsStatus === RESOLVED_DATA && (
        <>
          <h2 className='text text_type_main-large'>Детали ингредиента</h2>
          <IngredientDetails ingredient={ingredient} />
        </>
      )}
    </div>
  );
};

export default IngredientPage;
