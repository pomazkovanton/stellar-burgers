import React from 'react';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { TIngredient } from '../../../utils/types/main';
import { addDetails } from '../../../store/slices/ingredientDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { INGREDIENTS_ROUTE } from 'src/utils/constans';

import styles from './ingredient.module.css';

interface IngredientProps {
  ingredient: TIngredient;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { burger } = useAppSelector((state) => state.burger);
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { ingredient },
  });

  const count = burger.filter((el) => el.item._id === ingredient._id).length;

  const handleClick = (): void => {
    dispatch(addDetails(ingredient));
  };

  return (
    <div ref={dragRef}>
      <Link
        className={styles.link}
        to={{ pathname: `${INGREDIENTS_ROUTE}/${ingredient._id}`, state: { background: location } }}
      >
        <div onMouseUp={handleClick} className={styles.card} role='presentation' draggable={true}>
          <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
          <div className={styles.price}>
            <span className='text text_type_digits-default'>{ingredient.price}</span>
            <CurrencyIcon type='primary' />
          </div>
          <p className={`text text_type_main-default ${styles.name}`}>{ingredient.name}</p>
          {count !== 0 ? <Counter count={count} size='default' /> : null}
        </div>
      </Link>
    </div>
  );
};

export default Ingredient;
