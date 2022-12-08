import React from 'react';
import { useParams } from 'react-router-dom';

import IngredientDetails from '../../components/BurgerIngredients/IngredientDetails/IngredientDetails';
import Loader from '../../components/Loader/Loader';

import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';
import { useAppSelector } from '../../utils/hooks';

import styles from './ingredientpage.module.css';

type TParams = {
  id: string;
};

const IngredientPage: React.FC = () => {
  const { id } = useParams<TParams>();
  const { ingredients, ingredientsStatus, ingredientsError } = useAppSelector(
    (store) => store.ingredients,
  );
  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <div className={styles.container}>
      {ingredientsStatus === lOADING_DATA && <Loader />}
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
