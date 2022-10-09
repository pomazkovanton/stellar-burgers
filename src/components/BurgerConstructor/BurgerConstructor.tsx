import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { fetchOrder } from '../../store/orderSlice';
import { addToBurger, reorderInBurger } from '../../store/burgerSlice';
import { BurgerIngredients } from '../../types/burgerIngredients';

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

  const calculatingPrice = (burger: BurgerIngredients[]): number => {
    let price = 0;
    burger.map((el) => {
      el.item.type !== 'bun' ? (price += el.item.price) : (price += el.item.price * 2);
    });
    return price;
  };

  const getIdIngredients = (ingredients: BurgerIngredients[]) => {
    const bun: BurgerIngredients = ingredients.find((ingr) => ingr.item.type === 'bun');
    const otherIngredients: BurgerIngredients[] = ingredients.filter(
      (ingr) => ingr.item.type !== 'bun',
    );
    const ingredientsID: string[] = [
      bun.item._id,
      ...otherIngredients.map((ingr) => ingr.item._id),
      bun.item._id,
    ];

    return ingredientsID;
  };

  const handleOrderClick = () => {
    const idIngredients = { ingredients: getIdIngredients(burger) };
    dispatch(fetchOrder(idIngredients));
  };

  const handleDragIngredient = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    dispatch(reorderInBurger({ startIndex: source.index, endIndex: destination.index }));
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
        <DragDropContext onDragEnd={handleDragIngredient}>
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
