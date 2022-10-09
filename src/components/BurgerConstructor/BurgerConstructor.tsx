import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useDrop } from 'react-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientType } from '../../types/Ingredient';
import { fetchOrder } from '../../store/orderSlice';
import { addToBurger } from '../../store/burgerSlice';

import styles from './burgerconstructor.module.css';

const BurgerConstructor: React.FC = () => {
  const { burger } = useSelector((state) => state.burger);
  const { orderStatus } = useSelector((state) => state.order);
  const isBunAdded = burger.find((ingr) => ingr.item.type === 'bun');

  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop({ ingredient }) {
      dispatch(addToBurger(ingredient));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  const borderColor = isHover ? 'lightblue' : 'transparent';

  const calculatingPrice = (burger): number => {
    let price = 0;
    burger.map((el) => {
      el.item.type !== 'bun' ? (price += el.item.price) : (price += el.item.price * 2);
    });
    return price;
  };

  const getIdIngredients = (ingredients: IngredientType[]) => {
    const bun: IngredientType | undefined = ingredients.find((ingr) => ingr.type === 'bun');
    const otherIngredients: IngredientType[] = ingredients.filter((ingr) => ingr.type !== 'bun');
    const ingredientsID: string[] = [bun._id, ...otherIngredients.map((ingr) => ingr._id), bun._id];

    return ingredientsID;
  };

  const handleOrderClick = () => {
    const idIngredients = { ingredients: getIdIngredients(burger) };
    dispatch(fetchOrder(idIngredients));
  };

  return (
    <section
      className={styles.container}
      ref={dropTarget}
      style={{ borderColor: `${borderColor}` }}
    >
      <ul className={styles.list}>
        {burger.map((ingr) => {
          if (ingr.item.type === 'bun')
            return (
              <li key={ingr.item._id} className={styles.margin}>
                <ConstructorElement
                  type='top'
                  isLocked={true}
                  text={`${ingr.item.name} (верх)`}
                  price={ingr.item.price}
                  thumbnail={ingr.item.image}
                />
              </li>
            );
        })}
        <DragDropContext onDragEnd={(result) => console.log(result)}>
          <Droppable droppableId='burgerIngredients'>
            {(droppableProvided) => (
              <div
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className={styles.wrapper}
              >
                {burger.map((ingr, index) => {
                  if (ingr.item.type === 'bun') return null;
                  return (
                    <Draggable key={ingr.id} draggableId={ingr.id} index={index}>
                      {(draggableProvided) => (
                        <li
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                          className={styles.ingredient}
                        >
                          <DragIcon type='primary' />
                          <ConstructorElement
                            text={ingr.item.name}
                            price={ingr.item.price}
                            thumbnail={ingr.item.image}
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {burger.map((ingr) => {
          if (ingr.item.type === 'bun')
            return (
              <li key={ingr.item._id} className={styles.margin}>
                <ConstructorElement
                  type='bottom'
                  isLocked={true}
                  text={`${ingr.item.name} (низ)`}
                  price={ingr.item.price}
                  thumbnail={ingr.item.image}
                />
              </li>
            );
        })}
      </ul>
      {burger.length !== 0 && (
        <div className={styles.order}>
          <div className={styles.price}>
            <p className='text text_type_digits-medium'>{calculatingPrice(burger)}</p>
            <CurrencyIcon type='primary' />
          </div>
          <Button
            type='primary'
            size='medium'
            onClick={handleOrderClick}
            disabled={!isBunAdded ? true : false}
          >
            {orderStatus === 'loading' ? 'Оформление...' : 'Оформить заказ'}
          </Button>
        </div>
      )}
    </section>
  );
};

export default BurgerConstructor;
